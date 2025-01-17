const fs = require('fs');
const path = require('path');
const stdin = process.stdin;
const pathTo = path.join(__dirname, 'text.txt');

const out = fs.createWriteStream(pathTo, 'utf-8');
const stdout = process.stdout;

console.log('\nEnter text.\n');

stdin.on('data', (event) => {
  
  console.log('\nTo exit, please, to type exit or to push Ctrl+C.\n');
  const data = event.toString().trim();
  if (data === 'exit') process.exit();
  out.write(data);
  
});
process.on('exit', () => stdout.write('Bye!'));
