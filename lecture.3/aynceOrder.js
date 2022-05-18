const fs = require('fs');

console.log('시작');
fs.readFile('lecture.3/readme2.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('1번', data.toString());
  fs.readFile('lecture.3/readme2.txt', (err, data) => {
    if (err) {
      throw err;
    }
    console.log('2번', data.toString());
    fs.readFile('lecture.3/readme2.txt', (err, data) => {
      if (err) {
        throw err;
      }
      console.log('3번', data.toString());
      console.log('끝');
    });
  });
});

// 이런 콜백 헬 이 만들어 진다.
// 이렇게 되면 동기와 어떤 차이가 있나
// 이 파일 자체를 여러 번 실행하거나 동시 실행하는 경우
// 백그라운드로 넘어가기 때문에 다 동시에 실행이 된다.
// sync.js 는 10개 실행하면 40개가 순서로 되지만
// asyncOrder.js 는 순서도 지키면서 
// 이 파일을 여러 번 실행시켰을 때 동시성으로 빠르게 실행된다.

// const fs = require('fs').promises;

// async function main(){
//     console.log('시작');
// 	let data = await fs.readFile('lecture.3/readme.txt')
// 	console.log('1번', data.toString());
// 	let data1 = await fs.readFile('lecture.3/readme.txt')
// 	console.log('2번', data1.toString());
// 	let data2 = await fs.readFile('lecture.3/readme.txt')
// 	console.log('3번', data2.toString());
// }

// main().then(()=>{
//     console.log('끝');
// }).catch(err => console.log(err));

// // 이렇게 await 를 이용해서 then 지옥을 빠져나올 수 있다.