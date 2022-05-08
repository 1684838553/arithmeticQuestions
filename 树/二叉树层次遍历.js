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

// 用队列实现层次遍历
function PrintFromTopToBottom(root) {
  // write code here
  let result = [];
  let queue = [];
  if (!root) return result;

  result.push(root.val);
  queue.push(root);
  while (queue.length) {
    let node = queue.shift();
    if (node.left) {
      result.push(node.left.val);
      queue.push(node.left);
    }
    if (node.right) {
      result.push(node.right.val);
      queue.push(node.right);
    }
  }
  return result;
}
