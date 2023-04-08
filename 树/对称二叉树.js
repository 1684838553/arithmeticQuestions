/*
给你一个二叉树的根节点 root ， 检查它是否轴对称
*/

var isSymmetric = function(root) {
    if(!root) return true;
    const isMirror = (l, r) => {
        if(!l && !r) return true
        if(l && r && l.val === r.val &&
            isMirror(l.left, r.right) &&
            isMirror(l.right, r.left)
        ) {
            return true
        }
        return false
    }
    return isMirror(root.left, root.right)
};
