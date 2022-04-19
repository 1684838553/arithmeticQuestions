/*
给定一个二叉树的根节点root，该树的节点值都在数字\ 0-9 0−9 之间，每一条从根节点到叶子节点的路径都可以用一个数字表示。
1.该题路径定义为从树的根结点开始往下一直到叶子结点所经过的结点
2.叶子节点是指没有子节点的节点
3.路径只能从父节点到子节点，不能从子节点到父节点
4.总节点数目为n

例如根节点到叶子节点的一条路径是1\to 2\to 31→2→3,那么这条路径就用\ 123 123 来代替。
找出根节点到叶子节点的所有路径表示的数字之和
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
function sumNumber( root,total ) {
    if(root.left == null&& root.right == null){
        return total
    }else{
        let result = 0
        if(root.left !== null){
            result += sumNumber(root.left,total*10 + root.left.val)
        }
        
        if(root.right !== null){
            result += sumNumber(root.right,total*10 + root.right.val)
        }
        
        return result
    }
}
/**
  * 
  * @param root TreeNode类 
  * @return int整型
  */
function sumNumbers( root ) {
    if(root === null) return 0
    return sumNumber(root,root.val)
}



module.exports = {
    sumNumbers : sumNumbers
};
