function QueuePriority() {
  this.items = [];

  // 内部类
  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  // 入队
  QueuePriority.prototype.addQueue = function (element, priority) {
    let queueElement = new QueueElement(element, priority);

    // 判断队列是否为空
    if (this.items.length === 0) {
      this.items.push(queueElement);
    } else {
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }

      if (!added) {
        this.items.push(queueElement);
      }
    }
  };

  // 出队
  QueuePriority.prototype.dequeue = function () {
    return this.items.shift();
  };

  // 返回队列中第一个元素
  QueuePriority.prototype.front = function () {
    return this.items[0];
  };

  // 队列是否为空
  QueuePriority.prototype.isEmpty = function () {
    return this.items.length === 0;
  };

  // 查看元素个数
  QueuePriority.prototype.size = function () {
    return this.items.length;
  };

  // toString()
  QueuePriority.prototype.toString = function () {
    let resultString = "";
    for (let i = 0; i < this.items.length; i++) {
      resultString += this.items[i].element + " " + this.items[i].priority;
    }
    return resultString;
  };
}

let queue = new QueuePriority();
queue.addQueue(99, 11);
queue.addQueue(99, 9);
console.log(queue.items);
