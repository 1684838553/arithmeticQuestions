// 栈的封装
function Stack() {
  // 栈中属性
  this.items = [];

  // 1. 入栈
  Stack.prototype.push = function (element) {
    return this.items.push(element);
  };

  // 2. 出栈
  Stack.prototype.pop = function () {
    return this.items.pop();
  };

  // 3. 查看栈顶元素
  Stack.prototype.peek = function () {
    return this.items[this.items.length - 1];
  };

  // 4. 判断栈是否为空
  Stack.prototype.isEmpty = function () {
    return this.items.length === 0;
  };

  // 5. 获取栈中元素个数
  Stack.prototype.size = function () {
    return this.items.length;
  };

  // 6. toString方法
  Stack.prototype.toString = function () {
    let resultString = "";
    for (let i = 0; i < this.items.length; i++) {
      resultString += this.items[i] + " ";
    }
    return resultString;
  };
}

// 栈的使用
let s = new Stack();
s.push(1);
s.push(2);
s.pop();
console.log(s.items, s.isEmpty(), s.peek(), s.toString());
// [ 1 ] false 1 1

let m = new Stack();
m.push(8);
m.push("ggg");
console.log(m.items);
// [ 8, 'ggg' ]

// 将十进制转成二进制
function decToBin(decNumber) {
  let stack = new Stack();

  // 循环操作
  while (decNumber > 0) {
    stack.push(decNumber % 2);
    decNumber = Math.floor(decNumber / 2);
  }

  console.log(stack.toString());
  let str = "";
  while (!stack.isEmpty()) {
    str += stack.pop();
  }
  return str;
}
const bin = decToBin(8);
console.log(bin);
