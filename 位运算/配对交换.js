/**
 * 配对交换。编写程序，交换某个整数的奇数位和偶数位，尽量使用较少的指令（也就是说，位0与位1交换，位2与位3交换，以此类推）。

    示例1:

    输入：num = 2（或者0b10）
    输出 1 (或者 0b01)
    示例2:

    输入：num = 3
    输出：3

 * @param {number} num
 * @return {number}
 */
var exchangeBits = function (num) {
  let str = num.toString(2);
  if (str.length % 2 === 1) {
    str = "0" + str;
  }
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += i % 2 == 1 ? str[i] + str[i - 1] : "";
  }
  return parseInt(newStr, 2);
};
