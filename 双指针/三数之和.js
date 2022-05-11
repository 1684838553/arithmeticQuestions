/**
 * 给出一个有n个元素的数组S，S中是否有元素a,b,c满足a+b+c=0？找出数组S中所有满足条件的三元组。
 *
 * [-10,0,10,20,-10,-40]
 * [[-10,-10,20],[-10,0,10]]
 *
 * @param num int整型一维数组
 * @return int整型二维数组
 */
function threeSum(num) {
  // write code here
  num.sort((a, b) => a - b);
  let result = [];
  let len = num.length;
  if (len < 3) return result;
  for (let i = 0; i < len; i++) {
    if (num[i] > 0) return result;
    if (i !== 0 && num[i] === num[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = len - 1;

    while (left < right) {
      let total = num[i] + num[left] + num[right];
      if (total === 0) {
        result.push([num[i], num[left], num[right]]);

        left++;
        right--;

        while (num[left] === num[left - 1]) {
          left++;
        }

        while (num[right] === num[right + 1]) {
          right--;
        }
      }

      if (total < 0) {
        left++;
      }

      if (total > 0) {
        right--;
      }
    }
  }
  return result;
}
