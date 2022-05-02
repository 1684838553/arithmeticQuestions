// 质数：只能被1和自己整除
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(3), isPrime(7), isPrime(9));

// 代码优化
// 一个数字进行因式分解，分解得到的两个数，一个大小小于sqrt(n),一个小于等于sqrt(n)
function isGoodPrime(num) {
  let temp = parseInt(Math.sqrt(num));
  for (let i = 2; i <= temp; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isGoodPrime(3), isGoodPrime(7), isGoodPrime(9));
