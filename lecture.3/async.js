const fs = require('fs');

console.log('시작');
fs.readFile('lecture.3/readme2.txt', (err, data) => {
  if (err) {
    throw err;  // err 처리는 까먹지 말고 꼭 처리를 하자
  }
  console.log('1번', data.toString());
});
fs.readFile('lecture.3/readme2.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('2번', data.toString());
});
fs.readFile('lecture.3/readme2.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('3번', data.toString());
});
console.log('끝');

// 비동기함수라서 얘네가 랜덤으로 실행이 된다. 
// 백그라운드로 넘어가면 동시 실행인데
// 누가 먼저 끝날지는 운영체제만 알 수 있다.