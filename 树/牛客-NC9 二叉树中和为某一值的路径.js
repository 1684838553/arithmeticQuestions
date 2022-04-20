/*
描述
给定一个二叉树root和一个值 sum ，判断是否有从根节点到叶子节点的节点值之和等于 sum 的路径。
1.该题路径定义为从树的根结点开始往下一直到叶子结点所经过的结点
2.叶子节点是指没有子节点的节点
3.路径只能从父节点到子节点，不能从子节点到父节点
4.总节点数目为n
https://uploadfiles.nowcoder.com/images/20200807/999991351_1596786493913_8BFB3E9513755565DC67D86744BB6159

例如：
给出如下的二叉树，\ sum=22 sum=22，

返回true，因为存在一条路径 5\to 4\to 11\to 25→4→11→2的节点值之和为 22
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
  * 
  * @param root TreeNode类 
  * @param sum int整型 
  * @return bool布尔型
  */
function hasPathSum( root ,  sum ) {
    if(!root) return false
    let rootVal = root.val
    
    if(rootVal === sum && root.left === null && root.right === null) return true
    return   hasPathSum(root.left,sum-rootVal)|| hasPathSum(root.right,sum-rootVal)
    
    
    
}
module.exports = {
    hasPathSum : hasPathSum
};
