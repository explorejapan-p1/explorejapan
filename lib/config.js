const fs = require('node:fs');
const crypto = require('node:crypto');
const MODEL = process.env.XAI_MODEL || 'grok-voice-latest';
const VOICE = process.env.XAI_VOICE || 'eve';
function instructions() {
  const file = process.env.INSTRUCTIONS_FILE;
  const base = file ? fs.readFileSync(file, 'utf8') : fs.readFileSync(require('node:path').join(__dirname,'..','generic-instructions.md'),'utf8');
  return [base, process.env.ADDITIONAL_INSTRUCTIONS].filter(Boolean).join('\n\n');
}
function sessionUpdate() { return {type:'session.update',session:{
  instructions:instructions(),voice:VOICE,
  audio:{input:{format:{type:'audio/pcmu'},transcription:{keyterms:['Sarah Goodman','Bofryomi']}},output:{format:{type:'audio/pcmu'}}},
  turn_detection:{type:'server_vad'}
}}; }
function greeting(direction,purpose) {
  const text=direction==='outbound'
   ? `Good day, this is Sarah Goodman, Chief Operating Officer at Bofryomi LLC. ${purpose ? purpose + ' ' : ''}Is now a convenient time to speak?`
   : 'Good day, this is Sarah Goodman, Chief Operating Officer at Bofryomi LLC. How may I help you today?';
  return {type:'conversation.item.create',item:{type:'force_message',role:'assistant',interruptible:false,content:[{type:'output_text',text}]}};
}
module.exports={MODEL,VOICE,instructions,sessionUpdate,greeting};
