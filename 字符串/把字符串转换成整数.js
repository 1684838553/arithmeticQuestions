/**
 * https://leetcode.cn/problems/ba-zi-fu-chuan-zhuan-huan-cheng-zheng-shu-lcof/description/
 * @param {string} str
 * @return {number}
 */
var strToInt = function (str) {
  str = str.trim();

  const minVal = -Math.pow(2, 31);
  const maxVal = Math.pow(2, 31) - 1;

  let newStr = "";
  const charList = "0123456789";

  for (let i = 0; i < str.length; i++) {
    if (
      (str[i] === "-" && !newStr) ||
      (str[i] === "+" && !newStr) ||
      charList.includes(str[i])
    ) {
      newStr += str[i];
    } else {
      break;
    }
  }

  if (newStr[0] === "+") newStr = newStr.substring(1);
  if (!newStr || newStr === "-") newStr = "0";
  let num = Number(newStr);
  num = num > minVal ? num : minVal;
  num = num < maxVal ? num : maxVal;

  return num;
};
