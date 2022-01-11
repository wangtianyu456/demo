const getSequence = (nums) => {
  let n = nums.length;
  let result = [nums[0]];
  let preIndex = [];
  for (let i = 1; i < nums.length; i++) {
    let last = result[result.length - 1];
    let current = nums[i];
    if (current > last) {
      preIndex[i] = last;
      result.push(current);
    } else {
      // 二分
      let start = 0;
      let end = result.length - 1;
      while (start < end) {
        const middle = (start + end) >> 1;
        if (current < result[middle]) {
          end = middle;
        } else {
          start = middle + 1;
        }
      }
      preIndex[i] = result[start - 1];
      result[start] = current;
    }
  }

  let length = result.length;
  let prev = result[length - 1];
  while (length--) {
    result[length] = prev;
  }
};

const getSequence = (nums) => {
  let result = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    let last = result[result.length - 1];
    let current = nums[i];
    if (current > last) {
      result.push(current);
    } else {
      let start = 0;
      let end = result.length - 1;
      while (start < end) {
        const middle = (start + end) >> 1;
        if (current < result[middle]) {
          end = middle;
        } else {
          start = middle + 1;
        }
      }
      result[start] = current;
    }
  }
  return result;
};
