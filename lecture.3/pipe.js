
const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('lecture.3/readme.txt', {highWaterMark: 16});
const zlibStream = zlib.createGzip();
// 압축 스트림
const writeStream = fs.createWriteStream('lecture.3/writeme3.txt');
readStream.pipe(zlibStream).pipe(writeStream);
// read 에서 16 바이트씩 읽어서 보내고 그 다음 
// write에서 16바이트 씩 읽어서 쓰는 것
// read 에서 읽어서 write.txt 에 쓰는
// zlibstream 은 압축을 한 다음에 압축한 것을 쓰는 것이다.