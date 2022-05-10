/**
 * 停车场有一横排车位0代表没有停车,1代表有车.
 * 至少停了一辆车在车位上,也至少有一个空位没有停车.
 * 为防止刮蹭,需为停车人找到一个车位 使得停车人的车最近的车辆的距离是最大的 返回此时的最大距离
 *
 * 输入描述:
 * 1. 一个用半角逗号分割的停车标识字符串,停车标识为0或1, 0为空位,1为已停车
 * 2. 停车位最多有100个
 *
 * 输出描述
 * 1. 输出一个整数记录最大距离
 * 示例一:
 * 输入 1,0,0,0,0,1,0,0,1,0,1 0,0,1,1,0,0
 * 输出 2
 * 说明
 * 当车停在第三个位置上时,离其最近的车距离为2(1~3)
 * 当车停在第四个位置上时,离其最近的车距离为2(4~6)
 * 其他位置距离为1 因此最大距离为2
 */

function findParking(str) {
  let max = 0;
  let arr = str.split(",");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "0") {
      const firstIndex = arr.slice(i).indexOf("1") + i;
      const lastIndex = arr.slice(0, i).lastIndexOf("1");
      max = Math.max(max, Math.min(i - lastIndex, firstIndex - i));
    } else {
      continue;
    }
  }
  return max;
}

let str = "1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0";
let str1 = "1,0,0,0,0,0,0,0,1,0,0,1,0,1";
console.log(findParking(str1));

// yang
function findParking(str) {
  let line = str.replace(/[,]/g, "");
  let arr = str.split(",");
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let site = arr[i];
    if (site == "0") {
      let pre = line.indexOf("1", i);
      let suf = line.lastIndexOf("1", i);
      if (pre == -1) {
        pre = 100;
      }
      if (suf == -1) {
        suf = line.length - 1;
      }
      let min = Math.min(pre - i, i - suf);
      if (min > max) {
        max = min;
      }
    }
  }
  return max;
}
