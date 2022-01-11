/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function (nums) {
  let i = 0;
  let j;
  while (i < nums.length) {
    j = nums[i] - 1;
    if (j >= 0 && j < nums.length && nums[j] !== j + 1) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }
  let x = 0;
  while (x <= nums.length && nums[x] === x + 1) {
    x++;
  }
  return x + 1;
};

const firstMissingPositive = function (nums) {
  let i = 0;
  let j;
  while (i < nums.length) {
    j = nums[i] - 1;
    if (j >= 0 && j < nums.length && nums[j] !== j + 1) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }
  let x = 0;
  while (x < nums.length && nums[x] !== x + 1) {
    x++;
  }
  return x + 1;
};
