function Set() {
  this.items = {};

  Set.prototype.add = function (val) {
    if (this.has(val)) {
      return false;
    }
    this.items[val] = val;
    return true;
  };

  Set.prototype.has = function (val) {
    return this.items.hasOwnProperty(val);
  };

  Set.prototype.remove = function (val) {
    if (!this.has(val)) {
      return false;
    }
    delete this.items[val];
    return true;
  };

  Set.prototype.clear = function () {
    this.items = {};
  };

  Set.prototype.size = function () {
    return Object.keys(this.items).length;
  };

  Set.prototype.values = function () {
    return Object.keys(this.items);
  };

  // 并集
  Set.prototype.union = function (otherSet) {
    // this 当前集合对象
    // otherSet 集合对象B
    var unionSet = new Set();
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    values = otherSet.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    return unionSet;
  };

  // 交集
  Set.prototype.intersection = function (otherSet) {
    let intersectionSet = new Set();

    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      let item = values[i];
      if (otherSet.has(item)) {
        intersectionSet.add(item);
      }
    }

    return intersectionSet;
  };

  // 差集
  Set.prototype.difference = function (otherSet) {
    let differenceSet = new Set();

    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      let item = values[i];
      if (!otherSet.has(item)) {
        differenceSet.add(item);
      }
    }

    return differenceSet;
  };

  // 判断this是otherSet的子集
  Set.prototype.subSet = function (otherSet) {
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      let item = values[i];
      if (!otherSet.has(item)) {
        return false;
      }
    }

    return true;
  };
}

let set1 = new Set();
set1.add(0);
set1.add(1);

let set2 = new Set();
set2.add(2);
set2.add(3);
set2.add(1);

const unionSet = set1.union(set2);
const intersectionSet = set1.intersection(set2);
const differenceSet = set1.difference(set2);
console.log(unionSet, intersectionSet, differenceSet, set1.subSet(set2));
