const exchange = function (nums) {
  const length = nums.length;
  if (!length) {
    return [];
  }
  let i = 0;
  let j = length - 1;
  while (i < j) {
    while (i < length && nums[i] % 2 === 1) i++;
    while (j >= 0 && nums[j] % 2 === 0) j--;
    if (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  return nums;
};

const exchange = function (nums) {
  const length = nums.length;
  if (length <= 0) {
    return;
  }
  let i = 0;
  let j = length - 1;
  while (i < j) {
    while (i < length && nums[i] % 2 === 1) i++;
    while (j >= 0 && nums[j] % 2 === 0) j++;
    if (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  return nums;
};

const exchange = function (nums) {
  const length = nums.length;
  if (!nums.length) {
    return;
  }
  let i = 0;
  let j = length - 1;
  while (i < j) {
    while (nums[i] % 2 === 1) i++;
    while (nums[j] % 2 === 0) j--;
    if (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  return nums;
};
