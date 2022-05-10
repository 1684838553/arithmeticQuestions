/**
 * 给定一个整型数组，请从该数组中选择3个元素组成最小数字并输出
 * （如果数组长度小于3，则选择数组中所有元素来组成最小数字）
 *
 * 输入描述：
 * 一行用半角逗号分割的字符串记录的整型数组，0<数组长度<=100,0<整数的取值范围<=10000
 *
 * 输出描述：
 * 由3个元素组成的最小数字，如果数组长度小于3，则选择数组中所有元素来组成最小数字。
 *
 * 示例1：
 * 输入
 * 21,30,62,5,31
 * 输出
 * 21305
 * 说明
 * 数组长度超过3，需要选3个元素组成最小数字，
 * 21305由 21,30,5 三个元素组成的数字为所有组合中最小的数字
 *
 * 示例2：
 * 输入
 * 5,21
 * 输出
 * 215
 * 说明
 * 数组长度小于3，选择所有元素来组成最小值，215为最小值
 */

function getMinNumber(str) {
  let arr = str.split(",");
  let len = arr.length;
  let result;
  if (len === 1) return Number(arr[0]);
  if (len === 2)
    return Math.min(Number(arr[0] + arr[1]), Number(arr[1] + arr[0]));

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      for (let k = 0; k < len; k++) {
        if (i !== j && i !== k && j !== k) {
          let temp = arr[i] + arr[j] + arr[k];
          result =
            typeof result === "undefined"
              ? Number(temp)
              : Math.min(result, Number(temp));
        }
      }
    }
  }
  return result;
}

let str = "21,30,62,5,31";
let str1 = "3,12";
let str2 = "56";
console.log(getMinNumber(str1));

// yang
let line = null;
let nums = [];
while ((line = readline())) {
  nums = line.split(",");
  console.log(solve(nums));
}
function solve(num) {
  if (num.length == 1) {
    return num[0];
  } else if (num.length == 2) {
    return Math.min(
      Number(String(num[0]) + String(num[1])),
      Number(String(num[1]) + String(num[0]))
    );
  }
  let res = [];
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      for (let k = j + 1; k < num.length; k++) {
        res.push(String(num[i]) + String(num[j]) + String(num[k]));
        res.push(String(num[i]) + String(num[k]) + String(num[j]));
        res.push(String(num[k]) + String(num[j]) + String(num[i]));
        res.push(String(num[k]) + String(num[i]) + String(num[j]));
        res.push(String(num[j]) + String(num[i]) + String(num[k]));
        res.push(String(num[j]) + String(num[k]) + String(num[i]));
      }
    }
  }
  res.sort((a, b) => {
    return Number(a) - Number(b);
  });
  return res[0];
}
