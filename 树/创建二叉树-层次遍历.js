/**
 * 需求：根据二叉树的层次遍历的序列结果，创建二叉树
 *
 * 例如：
 * 层次遍历结果为 ['a','b','c','d','#', '#','e','#','f','#','#','#','#']
 * 对应的二叉树：https://img-blog.csdnimg.cn/f8ff1d91fc344b509e15711a55a60b6d.png
 * 
 * 算法思路  队列
 * 
 * 算法步骤：
 * 1，找到根节点，将根节点加入队列（层次遍历结果序列的第一个一定是根节点）
 * 2，队列里面的a出队（队列队首的元素出队），把和a相关的b和c加入到队列
 * （把和出队的相关的元素加入队列）
 * 
 * # 代表叶子结点，不进入队列
 * 
 */

function TreeNode(val) {
    this.val = val
    this.left = null
    this.right = null
}

// 根据二叉树的层次遍历的序列结果，创建二叉树
let levelOrderArr = ['a', 'b', 'c', 'd', '#', '#', 'e', '#', 'f', '#', '#', '#', '#']
function createTree(levelOrderArr) {
    // 用数组模拟队列
    let queue = []
    let root = null

    if (levelOrderArr[0]) {
        let nodeVal = levelOrderArr.shift()
        root = new TreeNode(nodeVal)

        queue.push(root)

        while (queue.length) {
            // 将队首元素出队
            let head = queue.shift()

            // 根节点的左右结点入队
            nodeVal = levelOrderArr.shift()

            // 创建左结点，加入队列
            if (nodeVal !== '#') {
                head.left = new TreeNode(nodeVal)
                queue.push(head.left)
            }

            nodeVal = levelOrderArr.shift()
            // 创建右结点，加入队列
            if (nodeVal !== '#') {
                head.right = new TreeNode(nodeVal)
                queue.push(head.right)
            }
        }
    }

    return root

}
const tree = createTree(levelOrderArr)
console.log(JSON.stringify(tree))
