function LinkList() {
  // 内部类：节点类
  function Node(val) {
    this.val = val;
    this.next = null;
  }

  this.head = null;
  this.length = 0;

  // 添加节点
  LinkList.prototype.append = function (val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
    } else {
      // 找到最后一个节点
      let current = this.head;
      while (current.next) {
        current = current.next;
      }

      // 将最后一个节点的next指向新的节点
      current.next = newNode;
    }

    this.length++;
  };

  // toString()
  LinkList.prototype.toString = function () {
    let current = this.head;
    let listString = "";

    while (current) {
      listString += current.val + " ";
      current = current.next;
    }

    return listString;
  };

  // insert方法 将节点插入到链表任何位置
  LinkList.prototype.insert = function (position, val) {
    if (position < 0 || position > this.length) {
      return new Error("position 越界");
    }

    let newNode = new Node(val);

    // 情况一：插入到position为0的位置
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      // 情况二

      let index = 0;
      let current = this.head;
      let previous = null;
      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }

      newNode.next = current;
      previous.next = newNode;
    }

    this.length++;
  };

  // get方法 获取某个位置的节点值
  LinkList.prototype.get = function (position) {
    if (position < 0 || position >= this.length) return null;

    let current = this.head;
    let index = 0;
    while (index < position) {
      current = current.next;
      index++;
    }
    return current.val;
  };

  // update 修改某个位置的元素
  LinkList.prototype.update = function (position, val) {
    if (position < 0 || position >= this.length) return false;

    let current = this.head;
    let index = 0;
    while (index < position) {
      current = current.next;
      index++;
    }
    current.val = val;
    return true;
  };

  // indexOf 返回节点在链表中的索引
  LinkList.prototype.indexOf = function (val) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.val === val) {
        return index;
      }
      current = current.next;
      index++;
    }

    // 没有找到
    return -1;
  };

  // remove 根据元素删除某个节点
  LinkList.prototype.remove = function (val) {
    const index = this.indexOf(val);
    return this.removeAt(index);
  };

  // removeAt 从列表特定位置删除某项
  LinkList.prototype.removeAt = function (position) {
    if (position < 0 || position >= this.length) return false;

    // 情况一：删除position为0的位置
    if (position === 0) {
      this.head = this.head.next;
    } else {
      // 情况二

      let index = 0;
      let current = this.head;
      let previous = null;
      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }

      previous.next = current.next;
    }
    this.length -= 1;
  };

  LinkList.prototype.isEmpty = function () {
    return this.length === 0;
  };

  LinkList.prototype.size = function () {
    return this.length;
  };
}

let link = new LinkList();
link.append(2);
link.append(4);
link.append(7);
link.insert(2, "hello");
console.log(
  link.head,
  link.get(2),
  link.indexOf("8"),
  link.update(0, "ppp"),
  link.removeAt(2),
  link.remove("ppp"),
  link.head,
  link.isEmpty(),
  link.size()
);
