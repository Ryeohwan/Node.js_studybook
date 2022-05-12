const fs = require('fs');

const readStream = fs.createReadStream('lecture.3/readme.txt', { highWaterMark: 16 });
// 64 kb 는 640000 이다. 뒤에 highWaterMark 하는게 뒤에 써있는 16 바이트씩 나눠서 보낸다는 것
const data = [];

readStream.on('data', (chunk) => {
  data.push(chunk);
  console.log('data :', chunk, chunk.length);
});

readStream.on('end', () => {
  console.log('end :', Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
  console.log('error :', err);
});

// stream 도 비동기이다. 그렇기 때문에 에러처리를 꼭 해줘야 한다.
// 에러 처리를 안해주면 에러났을 시 프로그램이 망가진다고 한다.