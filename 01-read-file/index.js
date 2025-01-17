const path = require('path');
const fs = require('fs');

const pathTo = path.join(__dirname, 'text.txt');
const res = fs.createReadStream(pathTo);
res.on('data', (event) => console.log(String(event)));
