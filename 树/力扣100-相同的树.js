/**
 * https://leetcode-cn.com/problems/same-tree
 * 
 * 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

示例 1：

图片链接：https://assets.leetcode.com/uploads/2020/12/20/ex1.jpg
输入：p = [1,2,3], q = [1,2,3]
输出：true



示例 2：

图片链接：https://assets.leetcode.com/uploads/2020/12/20/ex2.jpg
输入：p = [1,2], q = [1,null,2]
输出：false



示例 3：
图片链接：https://assets.leetcode.com/uploads/2020/12/20/ex3.jpg
输入：p = [1,2,1], q = [1,1,2]
输出：false
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {

    if (p === null && q === null) {
        return true
    } else if (p === null || q === null) {
        return false
    } else if (p.val !== q.val) {
        return false
    } else {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    }

};
