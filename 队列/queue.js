function Queue() {
  this.items = [];

  //队中初始化元素
  Queue.prototype.initQueue = function (arr) {
    this.items = arr;
  };
  // 入队
  Queue.prototype.addQueue = function (element) {
    this.items.push(element);
  };

  // 出队
  Queue.prototype.dequeue = function () {
    return this.items.shift();
  };

  // 返回队列中第一个元素
  Queue.prototype.front = function () {
    return this.items[0];
  };

  // 队列是否为空
  Queue.prototype.isEmpty = function () {
    return this.items.length === 0;
  };

  // 查看元素个数
  Queue.prototype.size = function () {
    return this.items.length;
  };

  // toString()
  Queue.prototype.toString = function () {
    let resultString = "";
    for (let i = 0; i < this.items.length; i++) {
      resultString += this.items[i] + " ";
    }
    return resultString;
  };
}

let queue = new Queue();
queue.addQueue(2);
queue.addQueue(4);
console.log(queue);
queue.dequeue();
console.log(queue, queue.isEmpty(), queue.size());

// 击鼓传花
// 几个朋友一起玩一个游戏，围成一圈，开始数数，数到某个数字的人自动淘汰，最后剩下的人获胜
// 参数：参与人姓名，基于数字
// 结果：最终剩下一个人姓名

// 参与人姓名
let arr = ["lili", "tom", "limei", "zhangsan", "lisi"];
// 淘汰数字
let num = 3;
function flowers(arr, num) {
  let queue = new Queue();
  queue.initQueue(arr);
  let count = 1;

  while (queue.size() > 1) {
    if (count === num) {
      queue.dequeue();
      count = 1;
    } else {
      queue.addQueue(queue.dequeue());
      count++;
    }
  }

  return queue.front();
}
const ele = flowers(arr, num);
console.log(ele);
