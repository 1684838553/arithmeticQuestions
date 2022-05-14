/**
 * 题目：给你两个二进制字符串，返回它们的和（用二进制表示）。
 *
 *
 * 输入：
 * "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
 * "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
 *
 * 输出：
 * "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
 */

// 解法一：使用BigInt
var addBinary = function (a, b) {
  return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
};

/**
 * 解法二：正常的二进制运算
 * */

var addBinary = function (a, b) {
  // 取最大长度，长度不够的字符串在前面补零
  let len = Math.max(a.length, b.length);
  a = a.padStart(len, "0");
  b = b.padStart(len, "0");

  // 存放结果
  let ans = [];
  // 是否进位
  let carry = 0;

  for (let i = len - 1; i >= 0; i--) {
    if (a[i] === "1" && b[i] === "1") {
      ans.unshift(carry);
      carry = 1;
    } else if (a[i] === "0" && b[i] === "0") {
      ans.unshift(carry);
      carry = 0;
    } else {
      ans.unshift(carry === 1 ? "0" : "1");
    }
  }

  if (carry) ans.unshift("1");

  return ans.join("");
};
