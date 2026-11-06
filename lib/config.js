const fs = require('node:fs');
const path = require('node:path');
const MODEL = process.env.XAI_MODEL || 'grok-voice-latest';
const VOICE = process.env.XAI_VOICE || 'celeste';
function instructions() {
  const extras = (process.env.ADDITIONAL_INSTRUCTIONS || '').trim();
  let base = '';
  const candidates = [
    process.env.INSTRUCTIONS_FILE,
    path.join(__dirname, '..', 'sarah-instructions.md'),
    path.join(__dirname, '..', 'generic-instructions.md'),
  ].filter(Boolean);
  for (const c of candidates) {
    try {
      base = fs.readFileSync(c, 'utf8');
      break;
    } catch (_) {}
  }
  if (!base) {
    base = 'You are Sarah Goodman, COO of Bofryomi LLC. Help the directors. Be discreet, calm, and precise.';
  }
  return [base, extras].filter(Boolean).join('\n\n');
}
function sessionUpdate() {
  return {
    type: 'session.update',
    session: {
      instructions: instructions(),
      voice: VOICE,
      audio: {
        input: { format: { type: 'audio/pcmu' }, transcription: { keyterms: ['Sarah Goodman', 'Bofryomi'] } },
        output: { format: { type: 'audio/pcmu' } },
      },
      turn_detection: { type: 'server_vad' },
    },
  };
}
function greeting(direction, purpose) {
  const text =
    direction === 'outbound'
      ? `Hello, this is Sarah Goodman, Chief Operating Officer at Bofryomi LLC. ${purpose ? purpose + ' ' : ''}Is now a convenient time to speak?`
      : 'Hello, this is Sarah Goodman, Chief Operating Officer at Bofryomi LLC. How may I help you today?';
  return {
    type: 'conversation.item.create',
    item: {
      type: 'force_message',
      role: 'assistant',
      interruptible: false,
      content: [{ type: 'output_text', text }],
    },
  };
}
module.exports = { MODEL, VOICE, instructions, sessionUpdate, greeting };
