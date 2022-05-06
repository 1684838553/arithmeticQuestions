1. [将升序数组转化为平衡二叉搜索树](https://www.nowcoder.com/practice/7e5b00f94b254da599a9472fe5ab283d?tpId=196&tqId=37054&rp=1&ru=/exam/oj&qru=/exam/oj&sourceUrl=%2Fexam%2Foj%3Fdifficulty%3D2%26page%3D1%26pageSize%3D50%26search%3D%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D196&difficulty=2&judgeStatus=undefined&tags=583&title=)

   ```javascript
   function insert(root, node) {
     // 向左查找
     if (root.val > node.val) {
       if (!root.left) {
         root.left = node;
       } else {
         insert(root.left, node);
       }
     } else {
       if (!root.right) {
         root.right = node;
       } else {
         insert(root.right, node);
       }
     }
   }
   /**
    *
    * @param num int整型一维数组
    * @return TreeNode类
    */
   function sortedArrayToBST(num) {
     // write code here
     let len = num.length;
     if (len === 0) return null;
     if (len === 1) return new TreeNode(num[0]);
     let rootVal = num.splice(Math.floor(len / 2), 1);
     let root = new TreeNode(rootVal);
     num.forEach((item) => {
       let node = new TreeNode(item);
       insert(root, node);
     });
     return root;
   }
   ```
