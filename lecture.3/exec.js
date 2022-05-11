const exec = require('child_process').exec;
// 구조분해하기 싫기에
// 구조분해하면
// const {exec} = require('child_process');

var process = exec('dir');
// 이렇게 하면 dir에 있는 파일 목록이 나온다.
// 이럼 노드에서도 명령어를 칠 수 있게 만들어 준다.

process.stdout.on('data', function(data) {
  console.log(data.toString());
}); // 실행 결과 - 콘솔에 data 가 나오면 toString으로 처리해줘야 한다.

process.stderr.on('data', function(data) {
  console.error(data.toString());
}); // 실행 에러

// 다른 언어를 호출하기 위해서.
// child_process 는 node 말고 다른 프로그램을 실행시킨다.
