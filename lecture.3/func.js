const { odd, even } = require('./var');
//export import 로 쓰고 싶다면
// import {odd, even} from './var';

function checkOddOrEven(num) {
  if (num % 2) { // 홀수면
    return odd;
  }
  return even;
}

module.exports = checkOddOrEven;
// module.exports = {checkOddOrEven,
// odd,even};

//export import 로 쓰고 싶다면 근데 동작이 좀 달라서 무턱대고 1대1 대응이라 생각하지말자.
// export default = checkOddOrEven