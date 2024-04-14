// 373题 LCR 075 数组的相对排序

/**

给定两个数组，arr1 和 arr2，

arr2 中的元素各不相同
arr2 中的每个元素都出现在 arr1 中
对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。

示例：
输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
输出：[2,2,2,1,4,3,3,9,6,7,19]
 

提示：
1 <= arr1.length, arr2.length <= 1000
0 <= arr1[i], arr2[i] <= 1000
arr2 中的元素 arr2[i] 各不相同
arr2 中的每个元素 arr2[i] 都出现在 arr1 中
*/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  return arr1.sort((a, b) => {
    const indexA = arr2.indexOf(a);
    const indexB = arr2.indexOf(b);

    if (indexA === -1 && indexB === -1) {
      return a - b;
    } else if (indexA > -1 && indexB > -1) {
      // 如果都在arr2中，则按照在arr2中的索引位置排序，索引位置越靠前的越排在前面
      return indexA - indexB;
    } else {
      // 返回 1 时，升序，即 a > b时， a, b交换位置
      // 返回 -1 和 0 时，不交换位置
      return indexA === -1 ? 1 : -1;
    }
  });
};
