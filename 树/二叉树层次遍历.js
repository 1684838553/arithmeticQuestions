/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
 *
 * @param root TreeNode类
 * @return int整型二维数组
 */
function levelOrder(root) {
  // write code here
  let arr = [];
  dfs(root, arr, 0);
  return arr;
}

function dfs(root, arr, level) {
  if (!root) return;
  if (!arr[level]) {
    arr[level] = [];
  }
  arr[level].push(root.val);
  dfs(root.left, arr, level + 1);
  dfs(root.right, arr, level + 1);
}
