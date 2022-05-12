const fs = require('fs');

const writeStream = fs.createWriteStream('lecture.3/writeme2.txt');
writeStream.on('finish', () => {
  console.log('파일 쓰기 완료');
});
// 쓰기 완료 시

writeStream.write('이 글을 씁니다.\n');
writeStream.write('한 번 더 씁니다.');
writeStream.end();
// 전체 완료