/**
 * https://leetcode.cn/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/description/
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  // 前后两个字符串拼接排序
  // 利用分治的思想，如果这个数组只有两个数字，那这两个数字(假设这俩数字叫a b)拼接的规则无非是ab或者ba，那么我们比较这俩拼接结果哪个小我们就采用哪个
  nums = nums.sort((a, b) => {
    return Number(String(a) + b) - Number(String(b) + a);
  });

  return nums.join("");
};

function Fn(arr) {
  let i = 0;
  while (true) {
    // arr[i] 就是要获取的值
    console.log(arr[i]);
    if (i < arr.length - 1) {
      i++;
    } else {
      i = 0;
    }
  }
}
