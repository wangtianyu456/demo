/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let findKthLargest = function (nums, k) {
  return quick(nums, 0, nums.length - 1, nums.length - k);
};

const quick = (arr, left, right, k) => {
  let index;
  if (left < right) {
    index = partition(arr, left, right);
    if (index === k) {
      return arr[index];
    } else if (index < k) {
      return quick(arr, index + 1, right, k);
    } else {
      return quick(arr, left, index - 1, k);
    }
  }
  return arr[left];
};

const partition = (arr, left, right) => {
  const random = Math.floor(Math.random() * (right - left + 1)) + left;
  let pivot = arr[random];
  let i = left;
  let j = right;
  while (i < j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }

    if (i < j) {
      swap(arr, i, j);
    }

    if (arr[i] === arr[j] && i !== j) {
      i++;
    }
  }
  return i;
};

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};
