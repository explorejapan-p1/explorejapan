const http=require('node:http');
const crypto=require('node:crypto');
const express=require('express');
const WebSocket=require('ws');
const {MODEL,VOICE,sessionUpdate,greeting}=require('./lib/config');
const PORT=Number(process.env.PORT||3000);
const PUBLIC_URL=(process.env.PUBLIC_URL||`http://127.0.0.1:${PORT}`).replace(/\/$/,'');
const ACCOUNT=process.env.TWILIO_ACCOUNT_SID||(process.env.TWILIO_TEST_ACCOUNT||'');
const SECRET=process.env.TWIML_SECRET||'';
const sessions=new Map();
const byCall=new Map();
const app=express();
app.set('trust proxy',true);
app.disable('x-powered-by');
app.use(express.urlencoded({extended:false,limit:'20kb'}));
function validSecret(given) { if(!SECRET)return false;const a=Buffer.from(String(given||''));const b=Buffer.from(SECRET);return a.length===b.length&&crypto.timingSafeEqual(a,b); }
app.get('/health',(_q,r)=>r.json({status:'ok',voice:VOICE,model:MODEL,bridge:'twilio-pcmu-xai-pcmu',activeSessions:sessions.size,twilioCredentials:!!(process.env.TWILIO_API_KEY&&process.env.TWILIO_API_SECRET),xaiCredential:!!process.env.XAI_API_KEY,operatorInstructions:!!process.env.ADDITIONAL_INSTRUCTIONS}));
app.get('/healthz',(_q,r)=>r.sendStatus(200));
function twiml(req,res){
 if(!validSecret(req.query.token))return res.sendStatus(404);
 if(req.body.AccountSid&&req.body.AccountSid!==ACCOUNT)return res.sendStatus(403);
 const id=crypto.randomBytes(24).toString('hex');
 const direction=req.path==='/outbound-twiml'?'outbound':'inbound';
 const purpose=direction==='outbound'?String(req.query.purpose||'').slice(0,500):'';
 const call={id,direction,purpose,callSid:req.body.CallSid||'',createdAt:Date.now(),status:'twiml-issued',events:[]};
 sessions.set(id,call);
 if(call.callSid)byCall.set(call.callSid,call);
 const ws=PUBLIC_URL.replace(/^http:/,'ws:').replace(/^https:/,'wss:')+'/media-stream/'+id;
 // All generated fields are fixed direction tokens, URL-safe IDs, or percent-encoded purposes.
 res.type('text/xml').send(`<?xml version="1.0" encoding="UTF-8"?><Response><Connect><Stream url="${ws}"><Parameter name="direction" value="${direction}"/><Parameter name="purpose" value="${encodeURIComponent(purpose)}"/></Stream></Connect></Response>`);
}
app.post(['/twiml','/outbound-twiml'],twiml);
app.get(['/twiml','/outbound-twiml'],(_q,r)=>r.sendStatus(405));
for(const url of ['/call-status','/recording-events'])app.post(url,(req,res)=>{
 if(!validSecret(req.query.token)||req.body.AccountSid!==ACCOUNT)return res.sendStatus(403);
 const call=byCall.get(req.body.CallSid);
 if(call)call.events.push({receivedAt:new Date().toISOString(),type:url,body:req.body});
 console.log(JSON.stringify({event:url,accountMatched:true,callStatus:req.body.CallStatus,recordingStatus:req.body.RecordingStatus,recordingSid:req.body.RecordingSid}));
 res.sendStatus(204);
});
const server=http.createServer(app);
const wss=new WebSocket.Server({noServer:true,maxPayload:1024*512});
server.on('upgrade',(req,socket,head)=>{
 const match=req.url.match(/^\/media-stream\/([a-f0-9]{48})$/);
 const call=match&&sessions.get(match[1]);
 if(!call||call.started||(!process.env.NODE_ENV?.includes('development')&&!ACCOUNT)){socket.write('HTTP/1.1 404 Not Found\r\n\r\n');socket.destroy();return;}
 call.started=true;
 wss.handleUpgrade(req,socket,head,ws=>wss.emit('connection',ws,req,call));
});
wss.on('connection',(twilio,req,call)=>{
 let xai=null,ready=false,closed=false,greeted=false,turn=0;
 let buffer='',streamSid='';
 const pending=[];
 const log=(message)=>console.log(JSON.stringify({event:message,bridgeCall:call.id,direction:call.direction}));
 const send=e=>{if(xai?.readyState===WebSocket.OPEN)xai.send(JSON.stringify(e));};
 const finish=()=>{
  if(closed)return;closed=true;
  call.status='ended';
  if(buffer.trim())console.log(JSON.stringify({event:'agent-transcript',bridgeCall:call.id,text:buffer.trim(),voice:VOICE}));
  buffer='';
  log('bridge-finished');
  if(xai&&xai.readyState<2)xai.close();
 };
 function start(start){
  if(start.accountSid!==ACCOUNT){log('unexpected-account');twilio.close();return;}
  streamSid=start.streamSid;call.callSid=start.callSid;byCall.set(start.callSid,call);
  call.status='live';log('twilio-stream-started');
  xai=new WebSocket(`wss://api.x.ai/v1/realtime?model=${MODEL}`,{perMessageDeflate:false,headers:{Authorization:`Bearer ${process.env.XAI_API_KEY}`,Origin:'https://voice-bridge-rr0w.onrender.com'}});
  xai.on('error',(e)=>{console.error(JSON.stringify({event:'xai-socket-error',message:e.message}));});
  
  xai.on('unexpected-response',(req,res)=>{
    console.error(JSON.stringify({event:'xai-handshake-rejected',status:res.statusCode}));
    const chunks=[];res.on('data',d=>chunks.push(d));res.on('end',()=>console.error(JSON.stringify({event:'xai-handshake-detail',detail:Buffer.concat(chunks).toString('utf8').replace(/[bB]earer\s+\S+/g,'Bearer [redacted]').slice(0,600)})));
    twilio.close();finish();
  });
  xai.on('close',()=>log('xai-closed'));
  xai.on('message',data=>{
   const event=JSON.parse(data.toString());
   switch(event.type){
    case 'conversation.created':send(sessionUpdate());log('session-update-sent');break;
    case 'session.updated':
     ready=true;log(`session-ready voice=${VOICE}`);
     for(const e of pending.splice(0))send(e);
     if(!greeted){greeted=true;send(greeting(call.direction,call.purpose));}
     if(!ready)twilio.close();
  if(process.env.TWILIO_API_KEY&&process.env.TWILIO_API_SECRET&&/^CA[a-f0-9]{32}$/i.test(start.callSid)){
      const body=new URLSearchParams({RecordingChannels:'dual',RecordingTrack:'both',RecordingStatusCallback:`${PUBLIC_URL}/recording-events?token=${encodeURIComponent(SECRET)}`,RecordingStatusCallbackEvent:'completed absent'});
      fetch(`https://api.twilio.com/2010-04-01/Accounts/${ACCOUNT}/Calls/${start.callSid}/Recordings.json`,{method:'POST',headers:{Authorization:'Basic '+Buffer.from(`${process.env.TWILIO_API_KEY}:${process.env.TWILIO_API_SECRET}`).toString('base64'),'Content-Type':'application/x-www-form-urlencoded'},body,signal:AbortSignal.timeout(12000)}).then(r=>console.log(JSON.stringify({event:'dual-recording-request',httpStatus:r.status,callSid:start.callSid}))).catch(e=>console.error(JSON.stringify({event:'recording-request-error',message:e.message})));
     }
     break;
    case 'response.created':turn++;buffer='';break;
    case 'response.output_audio_transcript.delta':buffer+=event.delta||'';break;
    case 'response.output_audio.delta':
      if(event.delta&&twilio.readyState===WebSocket.OPEN&&streamSid)twilio.send(JSON.stringify({event:'media',streamSid,media:{payload:event.delta}}));
      break;
    case 'response.done':case 'response.cancelled':
      if(buffer.trim())console.log(JSON.stringify({event:'agent-transcript',bridgeCall:call.id,text:buffer.trim(),voice:VOICE}));
      buffer='';break;
    case 'conversation.item.input_audio_transcription.completed':console.log(JSON.stringify({event:'caller-transcript',bridgeCall:call.id,text:event.transcript}));break;
    case 'input_audio_buffer.speech_started':if(turn>1&&streamSid)twilio.send(JSON.stringify({event:'clear',streamSid}));break;
    case 'error':console.error(JSON.stringify({event:'xai-error',message:event.error?.message||'session error'}));break;
   }
  });
 }
 twilio.on('message',data=>{
  const msg=JSON.parse(data.toString());
  if(msg.event==='start')start(msg.start);
  else if(msg.event==='media'&&msg.media?.track==='inbound'){
   const event={type:'input_audio_buffer.append',audio:msg.media.payload};
   if(ready)send(event);else if(pending.length<5000)pending.push(event);
  }else if(msg.event==='stop'){twilio.close();finish();}
 });
 twilio.on('error',()=>finish());twilio.on('close',finish);
 call.expiry=setTimeout(()=>twilio.close(),4*60*60*1000);
 call.expiry.unref();
});
setInterval(()=>{for(const[id,c]of sessions)if(Date.now()-c.createdAt>4*60*60*1000){sessions.delete(id);if(c.callSid)byCall.delete(c.callSid);}},60000).unref();
server.listen(PORT,'0.0.0.0',()=>console.log(JSON.stringify({event:'listening',port:PORT,voice:VOICE,model:MODEL})));
function shutdown(){for(const c of sessions.values())c.status='shutdown';server.close(()=>process.exit(0));setTimeout(()=>process.exit(1),5000).unref();}
process.on('SIGTERM',shutdown);process.on('SIGINT',shutdown);
