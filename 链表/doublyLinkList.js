// 实现双向链表

function DoublyLinkList() {
  // 节点类
  function Node(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }

  this.head = null;
  this.tail = null;
  this.length = 0;

  // append 添加
  DoublyLinkList.prototype.append = function (val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  };

  // insert(position,val) 插入
  DoublyLinkList.prototype.insert = function (position, val) {
    if (position < 0 || position > this.length) {
      return new Error("position 越界");
    }
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 判断position是否为0
      if (position === 0) {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      } else if (position === this.length) {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      } else {
        let current = this.head;
        let index = 0;
        while (index < position) {
          index++;
          current = current.next;
        }

        // 修改指针
        newNode.next = current;
        newNode.prev = current.prev;
        current.prev.next = newNode;
        current.prev = newNode;
      }
    }

    this.length++;
    return true;
  };

  // get(position)
  DoublyLinkList.prototype.get = function (position) {
    if (position < 0 || position >= this.length) return null;

    let current = this.head;
    let index = 0;
    while (index < position) {
      current = current.next;
      index++;
    }
    return current.val;
  };

  // indexOf(val)
  DoublyLinkList.prototype.indexOf = function (val) {
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

  // update(position,element)
  DoublyLinkList.prototype.update = function (position, val) {
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

  // removeAt(position)
  DoublyLinkList.prototype.removeAt = function (position) {
    if (position < 0 || position >= this.length) return false;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      if (position === 0) {
        this.head.next.prev = null;
        this.head = this.head.next;
      } else if (position === this.length - 1) {
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
      } else {
        let index = 0;
        let current = this.head;

        while (index < position) {
          current = current.next;
          index++;
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
    }

    this.length -= 1;
    return true;
  };

  // remove(val)
  DoublyLinkList.prototype.remove = function (val) {
    let index = this.indexOf(val);
    this.removeAt(index);
  };

  // isEmpty
  DoublyLinkList.prototype.isEmpty = function () {
    return this.length === 0;
  };

  // size
  DoublyLinkList.prototype.size = function () {
    return this.length;
  };

  // toString
  DoublyLinkList.prototype.toString = function () {
    return this.backwordString();
  };

  // forWardString  向前遍历的节点字符串形式
  DoublyLinkList.prototype.forWardString = function () {
    let current = this.tail;
    let result = "";
    while (current) {
      result += current.val + " ";
      current = current.next;
    }
    return result;
  };

  // backwordString 向后遍历的节点字符串形式
  DoublyLinkList.prototype.backwordString = function () {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.val + " ";
      current = current.next;
    }
    return result;
  };
}

let link = new DoublyLinkList();
link.append(7);
link.append(3);
console.log(link, link.backwordString(), link.forWardString());
