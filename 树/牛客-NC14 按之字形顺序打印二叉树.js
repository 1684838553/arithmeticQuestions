// https://www.nowcoder.com/practice/91b69814117f4e8097390d107d2efbe0?tpId=196&tqId=37056&rp=1&ru=/exam/oj&qru=/exam/oj&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D196&difficulty=undefined&judgeStatus=undefined&tags=&title=

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot) {
  // write code here
  let arr = [];
  das(pRoot, arr, 0);
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
      arr[i].reverse();
    }
  }
  return arr;
}
function das(root, arr, level) {
  if (!root) return;
  if (!arr[level]) {
    arr[level] = [];
  }
  arr[level].push(root.val);
  das(root.left, arr, level + 1);
  das(root.right, arr, level + 1);
}
