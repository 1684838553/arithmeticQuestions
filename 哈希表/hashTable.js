// 封装哈希表类

function HashTable() {
  // 存放相关元素的数组
  this.store = [];
  // 表示当前已经存在了多少数据
  this.count = 0;
  // 用于标记数组中可以存放多少个元素
  this.limit = 7;

  // 加载因子

  // 哈希函数
  HashTable.prototype.hashCode = function (str, size) {
    let hashCode = 0;

    for (let i = 0; i < str.length; i++) {
      hashCode = 37 * hashCode + str.charCodeAt(i);
    }

    // 取余操作
    let index = hashCode % size;
    return index;
  };

  // 插入和修改数据
  /**
   * 根据key获取索引值，将数据插入到对应位置
   * 根据索引值取出bucket，如果不存在，在该位置创建一个
   * 判断新增还是修改，如果已经有值，那么就修改，没有就插入
   */
  HashTable.prototype.update = function (key, value) {
    let index = this.hashCode(key, this.limit);

    let bucket = this.store[index];

    if (!bucket) {
      bucket = [];
      this.store[index] = bucket;
    }

    for (let i = 0; i < bucket.length; i++) {
      // 键和值以数组形式存储 [键，值]
      let tuple = bucket[i];
      if (tuple[0] === key) {
        tuple[1] = value;
        return;
      }
    }

    bucket.push([key, value]);
    this.count += 1;
  };

  // 获取
  HashTable.prototype.get = function (key) {
    let index = this.hashCode(key, this.limit);
    let bucket = this.store[index];

    if (!bucket) {
      return null;
    }

    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        return tuple[1];
      }
    }

    return null;
  };

  // 删除
  HashTable.prototype.remove = function (key) {
    let index = this.hashCode(key, this.limit);
    let bucket = this.store[index];

    if (!bucket) {
      return null;
    }

    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        bucket.splice(i, 1);
        this.count--;
        return tuple[1];
      }
    }

    return null;
  };

  HashTable.prototype.isEmpty = function () {
    return this.count === 0;
  };

  HashTable.prototype.size = function () {
    return this.count;
  };
}

let hash = new HashTable();
hash.update("name", "drunk");
hash.update("age", 18);
hash.update("pohne", "111111");
console.log(hash.store[1], hash.remove("pohne"), hash);
