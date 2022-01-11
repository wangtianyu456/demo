/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[left] <= nums[right]) {
      return nums[left];
    }
    if (nums[left] < nums[mid]) {
      left = mid + 1;
    } else if (nums[right] > nums[mid]) {
      right = mid;
    } else {
      left++;
    }
  }
};

// [1,3,5]
console.log(findMin([1, 3, 5]));
