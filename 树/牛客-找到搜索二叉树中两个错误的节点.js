// https://www.nowcoder.com/practice/4582efa5ffe949cc80c136eeb78795d6?tpId=196&tqId=37154&rp=1&ru=/exam/oj&qru=/exam/oj&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26pageSize%3D50%26search%3D%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D196&difficulty=undefined&judgeStatus=undefined&tags=583&title=

/**
 * 一棵二叉树原本是搜索二叉树，但是其中有两个节点调换了位置，使得这棵二叉树不再是搜索二叉树，请按升序输出这两个错误节点的值。(每个节点的值各不相同)
搜索二叉树：满足每个节点的左子节点小于当前节点，右子节点大于当前节点。 
 **
 解题思路：
 1. 根据二叉搜索树的特点，拿到所有值，放到数组中
 2. 数组中所有的值应该是从小到大排列的
 3. 出现异常的数据就是错误的数据
*/

/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
 *
 * @param root TreeNode类 the root
 * @return int整型一维数组
 */
function findError(root) {
  // write code here
  let arr = [];
  getNodeValArr(root, arr);
  let result = [];

  // 判断哪些数据错误
  let i = 0;
  let j = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      result.push(arr[i]);
      break;
    }
  }

  for (j; j > i; j--) {
    if (arr[j] < arr[j - 1]) {
      result.push(arr[j]);
      break;
    }
  }

  // 升序输出
  return result.sort();
}

// 获取二叉搜索树的值
function getNodeValArr(root, arr) {
  if (!root) return;
  getNodeValArr(root.left, arr);
  arr.push(root.val);
  getNodeValArr(root.right, arr);
}
