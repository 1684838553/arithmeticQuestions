// 取反
function inverseCode(n) {
  if (n >= 0) {
    return n.toString(2);
  } else {
    n = (-n).toString(2);
    let str = "1";
    for (let i = 0; i < n.length; i++) {
      str += n[i] === "1" ? "0" : "1";
    }
    return str;
  }
}

// 补码
function complement(n) {
  if (n >= 0) {
    return n.toString(2);
  } else {
    return (n >>> 0).toString(2);
  }
}
console.log(complement(-10));
