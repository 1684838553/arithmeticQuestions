/**
 * nowcoder.com/practice/a9d0ecbacef9410ca97463e4a5c83be7?tpId=196&tqId=37103&rp=1&ru=/exam/oj&qru=/exam/oj&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26pageSize%3D50%26search%3D%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D196&difficulty=undefined&judgeStatus=undefined&tags=583&title=
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param pRoot TreeNode类
 * @return TreeNode类
 */
function Mirror(pRoot) {
  // write code here
  if (!pRoot) return;
  let tmp = pRoot.left;
  pRoot.left = pRoot.right;
  pRoot.right = tmp;

  Mirror(pRoot.left);
  Mirror(pRoot.right);

  return pRoot;
}
