const fs = require('fs');
let buffer = fs.readFileSync(process.argv[2])
let bufferFile = buffer.toString()
const lineBreaks = bufferFile.split('\n');
console.log(lineBreaks.length - 1)