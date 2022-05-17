const fs = require('fs');

console.log('before: ', process.memoryUsage().rss);

const readStream = fs.createReadStream('lecture.3/big.txt');
const writeStream = fs.createWriteStream('lecture.3/big3.txt');
readStream.pipe(writeStream);
readStream.on('end', () => {
  console.log('stream: ', process.memoryUsage().rss);
});

// 버퍼와 스트림 간의 메모리 차이가 엄청나다.