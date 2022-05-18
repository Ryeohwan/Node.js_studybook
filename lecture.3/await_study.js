const fs = require('fs').promises;

async function main(){
    console.log('시작');
	let data = await fs.readFile('lecture.3/readme.txt')
	console.log('1번', data.toString());
	let data1 = await fs.readFile('lecture.3/readme.txt')
	console.log('2번', data1.toString());
	let data2 = await fs.readFile('lecture.3/readme.txt')
	console.log('3번', data2.toString());
}

main().then(()=>{
    console.log('끝');
}).catch(err => console.log(err));