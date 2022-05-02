// 将字符串转成一个数字
// 将大的数字hashCode压缩到数组范围（大小）之内
function hashCode(str, size) {
  let hashCode = 0;

  for (let i = 0; i < str.length; i++) {
    hashCode = 37 * hashCode + str.charCodeAt(i);
  }

  // 取余操作
  let index = hashCode % size;
  return index;
}
