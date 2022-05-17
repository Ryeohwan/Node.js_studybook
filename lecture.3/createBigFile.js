const fs = require('fs');
const file = fs.createWriteStream('lecture.3/big.txt');

for (let i = 0; i <= 100; i++) {
  file.write('안녕하세요. 엄청나게 큰 파일을 만들어 볼 것입니다. 각오 단단히 하세요!\n');
}
file.end();

// 이 코드는 1기가 크기의 파일을 만든다.