/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let count = 0;
  let middleIndex;
  let range = [];
  // 先二分查找 找到这个值
  while (left <= right) {
    const middle = ~~((left + right) / 2);
    if (nums[middle] < target) {
      left = middle + 1;
    } else if (nums[middle] > target) {
      right = middle - 1;
    } else {
      middleIndex = middle;
      count++;
      range = [middleIndex, middleIndex];
      break;
    }
  }
  // if (!middleIndex) {
  //   return [-1, -1];
  // }

  let leftIndex = middleIndex - 1;
  while (nums[leftIndex] === target) {
    range[0] = leftIndex;
    leftIndex--;
    count++;
  }
  let rightIndex = middleIndex + 1;
  while (nums[rightIndex] === target) {
    range[1] = rightIndex;
    rightIndex++;
    count++;
  }
  return count;
};
