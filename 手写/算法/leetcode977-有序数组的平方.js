/**
 *
 * 利用双指针，本身就是排好序的数组，那么平方后最大的值只能是开头或者结尾，所以利用这个机制配合双指针，每次都选出最大的值来倒序的填充结果数组即可
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
  const len = nums.length;
  let result = new Array(len);
  let k = len - 1;
  let start = 0;
  let end = len - 1;
  while (start <= end) {
    const left = Math.abs(nums[start]);
    const right = Math.abs(nums[end]);
    if (left < right) {
      result[k] = Math.pow(right, 2);
      k--;
      end--;
    } else {
      result[k] = Math.pow(left, 2);
      k--;
      start++;
    }
  }
  return result;
};
const sortedSquares = function (nums) {
  const len = nums.length;
  const res = new Array(len);
  let k = len - 1;
  let start = 0;
  let end = k;

  while (start <= end) {
    if (Math.abs(nums[start]) > Math.abs(nums[end])) {
      res[k] = Math.pow(nums[start], 2);
      k--;
      start++;
    } else {
      res[k] = Math.pow(nums[end], 2);
      k--;
      end--;
    }
  }
  return res;
};
