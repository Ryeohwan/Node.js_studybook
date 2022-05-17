const fs = require('fs');

console.log('before: ', process.memoryUsage().rss);

const data1 = fs.readFileSync('lecture.3/big.txt');
fs.writeFileSync('lecture.3/big2.txt', data1);
console.log('buffer: ', process.memoryUsage().rss);

// check about buffer