let l = 0;
let r = length - 1;

while (l + 1 < r) {
  mid = Math.floor(l + (r - l) / 2);

  if (nums[mid] === target) {
    return mid;
  } else if (nums[mid] < target) {
    l = mid;
  } else {
    r = mid;
  }
}

//
