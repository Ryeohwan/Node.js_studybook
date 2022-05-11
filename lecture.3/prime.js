const min = 2;
const max = 10000000;
const primes = [];

// 에라토스테네스의 채
function findPrimes(start, range) {
  let isPrime = true;
  const end = start + range;
  for (let i = start; i < end; i++) {
    for (let j = min; j < Math.sqrt(end); j++) {
      if (i !== j && i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
    isPrime = true;
  }
}

console.time('prime');
findPrimes(min, max);
console.timeEnd('prime');
console.log(primes.length);
// single threading time test
// 이렇게 혼자서 10초를 잡아먹으면 다른 사람들은 계속 
// 누적해서 대기해야 하는 참사가 일어난다.