import fs from 'fs';

const logFilePath = 'C:\\Users\\HARIKRISHNAN\\.gemini\\antigravity-ide\\brain\\87926a11-81af-43fb-b4bc-fae2e9850e70\\.system_generated\\logs\\transcript.jsonl';

try {
  const fileContent = fs.readFileSync(logFilePath, 'utf8');
  const lines = fileContent.trim().split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const step = JSON.parse(lines[i]);
    if (step.source === 'USER_EXPLICIT' && step.type === 'USER_INPUT') {
      const isCompendium = step.content.includes('DEFINITIVE COMPENDIUM');
      console.log(`Step ${step.step_index}: Length=${step.content.length}, isCompendium=${isCompendium}`);
      if (isCompendium) {
        console.log(`  Last 200 chars: ${step.content.substring(step.content.length - 200)}`);
      }
    }
  }
} catch (err) {
  console.error('Error:', err);
}
