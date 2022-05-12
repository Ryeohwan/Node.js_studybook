const buffer = Buffer.from('저를 버퍼로 바꿔보세요');
console.log('from():', buffer);
console.log('length:', buffer.length); // 32 byte
console.log('toString():', buffer.toString()); // 버퍼를 문자열로 바꾼다.

const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
const buffer2 = Buffer.concat(array);  // concat 은 합치는 것
console.log('concat():', buffer2.toString());
// 버퍼를 합치고 문자열로 바꿔주었다.

const buffer3 = Buffer.alloc(5);  // 데이터는 없는데 빈 버퍼를 만들어 주는 것
console.log('alloc():', buffer3); // 5바이트짜리 버퍼를 만드는 것이다.

//The Buffer.alloc() method creates a new buffer object of the specified size.
