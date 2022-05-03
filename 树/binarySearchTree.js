// 封装二叉搜索树
function BinarySearchTree() {
  // 封装节点类
  function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  this.root = null;

  // 插入
  BinarySearchTree.prototype.insert = function (val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  };

  BinarySearchTree.prototype.insertNode = function (rootNode, newNode) {
    if (rootNode.val > newNode.val) {
      // 向左查找
      if (!rootNode.left) {
        rootNode.left = newNode;
      } else {
        this.insertNode(rootNode.left, newNode);
      }
    } else {
      // 向右查找
      if (!rootNode.right) {
        rootNode.right = newNode;
      } else {
        this.insertNode(rootNode.right, newNode);
      }
    }
  };

  // 查找某个值，找到返回true,没有找到，返回false
  BinarySearchTree.prototype.search = function (val) {
    let root = this.root;
    while (root) {
      if (val < root.val) {
        root = root.left;
      } else if (val > root.val) {
        root = root.right;
      } else {
        return true;
      }
    }
    return false;
  };

  // 通过中序遍历方式遍历所有节点 左中右
  BinarySearchTree.prototype.midOrderTraversal = function (handler) {
    this.midOrderTraversalNode(this.root, handler);
  };
  BinarySearchTree.prototype.midOrderTraversalNode = function (
    rootNode,
    handler
  ) {
    if (rootNode) {
      // 处理经过节点的子节点
      this.midOrderTraversalNode(rootNode.left, handler);
      // 处理经过的节点
      handler(rootNode.val);
      this.midOrderTraversalNode(rootNode.right, handler);
    }
  };

  // 通过先序遍历方式遍历所有节点,根左右
  BinarySearchTree.prototype.preOrderTraversal = function (handler) {
    this.preOrderTraversalNode(this.root, handler);
  };
  BinarySearchTree.prototype.preOrderTraversalNode = function (
    rootNode,
    handler
  ) {
    if (rootNode) {
      // 处理经过的节点
      handler(rootNode.val);
      // 处理经过节点的子节点
      this.preOrderTraversalNode(rootNode.left, handler);
      this.preOrderTraversalNode(rootNode.right, handler);
    }
  };

  // 通过后序遍历方式遍历所有节点,左右跟
  BinarySearchTree.prototype.postOrderTraversal = function (handler) {
    this.postOrderTraversalNode(this.root, handler);
  };
  BinarySearchTree.prototype.postOrderTraversalNode = function (
    rootNode,
    handler
  ) {
    if (rootNode) {
      // 处理经过节点的子节点
      this.postOrderTraversalNode(rootNode.left, handler);
      this.postOrderTraversalNode(rootNode.right, handler);

      // 处理经过的节点
      handler(rootNode.val);
    }
  };

  // 返回树的最小值
  BinarySearchTree.prototype.min = function () {
    let root = this.root;
    let min;
    while (root) {
      min = root.val;
      root = root.left;
    }

    return min;
  };

  // 返回树的最大值
  BinarySearchTree.prototype.max = function () {
    let root = this.root;
    let max;
    while (root) {
      max = root.val;
      root = root.right;
    }

    return max;
  };

  // 从树中移除某个值
  // 1. 该节点是叶子节点 2. 有一个子节点 3. 右两个子节点
  BinarySearchTree.prototype.remove = function (val) {
    // 寻找要删除的节点
    let current = this.root;
    let parent = null;
    let isLeftChild = true;

    while (current.val !== val) {
      parent = current;
      if (current.val > val) {
        isLeftChild = true;
        current = current.left;
      } else {
        isLeftChild = false;
        current = current.right;
      }

      // 没找到该节点，返回false
      if (!current) return false;
    }

    // 删除节点为叶子节点
    if (!current.left && !current.right) {
      if (current === this.root) {
        this.root = null;
      } else if (isLeftChild) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }

    // 删除节点有一个子节点
    else if (!current.right) {
      if (current === this.root) {
        this.root = current.left;
      }
      if (isLeftChild) {
        parent.left = current.left;
      } else {
        parent.right = current.left;
      }
    } else if (!current.left) {
      if (current === this.root) {
        this.root = current.right;
      }
      if (isLeftChild) {
        parent.left = current.right;
      } else {
        parent.right = current.right;
      }
    }

    // 删除节点有两个子节点
    else {
      let succssor = this.getSuccssor(current);

      if (this.root === current) {
        this.root = succssor;
      } else if (isLeftChild) {
        parent.left = succssor;
      } else {
        parent.right = succssor;
      }

      succssor.left = current.left;
    }
  };

  BinarySearchTree.prototype.getSuccssor = function (delNode) {
    let succssor = delNode;
    let current = delNode.right;
    let succssorParant = delNode;

    while (current) {
      succssorParant = succssor;
      succssor = current;
      current = current.left;
    }

    if (succssor !== delNode.right) {
      succssorParant.left = succssor.right;
      succssor.right = delNode.right;
    }

    return succssor;
  };
}

let tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
console.log(tree.root);
let result = "";
function hander(val) {
  result += val + " ";
}
// tree.preOrderTraversal(hander);
// tree.midOrderTraversal(hander);
tree.postOrderTraversal(hander);
console.log(result, tree.min(), tree.max(), tree.search(34));
