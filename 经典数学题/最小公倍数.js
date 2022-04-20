process.stdin.resume();
process.stdin.setEncoding('utf-8');
let input = '';
process.stdin.on('data', (data) => {
  input += data;
});
process.stdin.on('end', () => {
  let inputArray = input.split('\n');
  for(item of inputArray){
      if(!item){
          continue
      }
      let result = 1n
      for(let i = 1n;i<=BigInt(item);i++){
          result = getLcm(result,i)
      }
      console.log(result.toString())
  }
  function getLcm(a,b){
      return a * b / getGcd(a,b)
  }

// js 辗转相除法求最大公约数 进而求最小公倍数
  function getGcd(a,b){
      if(a === b){
          return a
      }else if(a % b === 0n){
          return b
      } else {
          return getGcd(b,a % b)
      }
  }
  process.exit();
});
