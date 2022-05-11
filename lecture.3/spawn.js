const spawn = require('child_process').spawn;

var process = spawn('python', ['lecture.3/test.py']);  // 저 test.py 를 실행

process.stdout.on('data', function(data) {
  console.log(data.toString());
}); // 실행 결과

process.stderr.on('data', function(data) {
  console.error(data.toString());
}); // 실행 에러

// 파이썬을 노드로 실행시킬 수 있다.