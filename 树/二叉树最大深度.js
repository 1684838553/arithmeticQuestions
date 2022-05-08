// 二叉树最大深度
function getMaxDepth(root) {
  if (!root) return 0;
  return Math.max(getMaxDepth(root.left) + 1, getMaxDepth(root.right) + 1);
}

//平衡二叉树，具有以下性质：它是一棵空树或它的左右两个子树的高度差的绝对值不超过1，并且左右两个子树都是一棵平衡二叉树。
// 判断二叉树是否为平衡二叉树
function IsBalanced_Solution(pRoot) {
  // write code here
  if (!pRoot) return true;
  return (
    Math.abs(getMaxDepth(pRoot.left) - getMaxDepth(pRoot.right)) <= 1 &&
    IsBalanced_Solution(pRoot.left) &&
    IsBalanced_Solution(pRoot.right)
  );
}
