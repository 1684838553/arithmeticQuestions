let aa = [
  [1, 2],
  [2, 3],
  [1, 2, -2, -1],
  [2, 1, -1, -2],
];

function getUnique(arr) {
  const obj = {};
  arr.forEach((item) => {
    const key = item.sort((a, b) => a - b);
    obj[key] = item;
  });

  console.log(Object.values(obj), obj);
}

getUnique(aa);
