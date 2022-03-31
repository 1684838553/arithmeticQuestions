// 前序遍历规则：根左右
// 中序遍历规则：左根右

/*
 1. 找到根节点（前序序列的第一个元素）
 2. 根据找到的根节点和中序序列，找到树的左子树和右子树
 3. 做左子树和右子树进行1，2步的递归操作
*/

function TreeNode(val) {
    this.val = val;
    this.left = null
    this.right = null
}

// 前序遍历
let preface = [1, 2, 4, 7, 3, 5, 6, 8]
// 中序遍历
let postOrder = [4, 7, 2, 1, 5, 3, 8, 6]

function rebuildTree(preface, postOrder) {
    if (preface[0]) {
        let rootVal = preface[0]

        // 查出根节点在中序遍历中的位置
        let index = postOrder.indexOf(rootVal)
        let leftTree = rebuildTree(preface.slice(1, index + 1), postOrder.slice(0, index))
        let rightTree = rebuildTree(preface.slice(index + 1), postOrder.slice(index + 1))

        let tree = new TreeNode(rootVal)
        tree.left = leftTree
        tree.right = rightTree
        return tree
    }
}
const res = rebuildTree(preface, postOrder)
console.log(res)
