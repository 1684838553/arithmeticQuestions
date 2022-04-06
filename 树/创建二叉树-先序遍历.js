/**
 * 需求：根据二叉树先序遍历的序列结果，创建二叉树
 *
 * 例如：
 * 先序遍历结果为 ['a','b','d','#','f','#','#','#','c','#','e','#','#']
 * 对应的二叉树：https://img-blog.csdnimg.cn/f8ff1d91fc344b509e15711a55a60b6d.png
 * 
 * 深度优先-先序遍历
 * 
 * 算法步骤：
 * 1，访问根节点
 * 2，递归访问左结点
 * 3，递归访问右节点
 * 
 * # 代表叶子结点，不进入队列
 * 
 * 递归注意事项：
 * 1，递归结束条件：叶子结点
 * 2，递归的递推表达式（节点之间的关系）：根左右
 * 3，递归返回值：创建好的树或子树
 * 
 */

function TreeNode(val) {
    this.val = val
    this.left = null
    this.right = null
}

// 根据二叉树的先序遍历的序列结果，创建二叉树
let preface = ['a', 'b', 'd', '#', 'f', '#', '#', '#', 'c', '#', 'e', '#', '#']
function createTree(preface) {
    let root = null

    if (preface[0]) {
        let rootVal = preface.shift()
        if (rootVal !== '#') {
            root = new TreeNode(rootVal)
            root.left = createTree(preface)
            root.right = createTree(preface)
        }


    }
    return root

}
const tree = createTree(preface)
console.log(JSON.stringify(tree))
