const threeSum = (nums) => {
  const len = nums.length;
  if (len < 3) return [];
  nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1;
    let r = len - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum < 0) {
        l++;
        continue;
      }
      if (sum > 0) {
        r--;
        continue;
      }
      res.push([nums[i], nums[l], nums[r]]);

      while (l < r && nums[l] === nums[++l]) {}
      while (l < r && nums[r] === nums[--r]) {}
    }
  }
  return res;
};

const threeSum = (nums) => {
  const len = nums.length;
  if (len < 3) return [];
  nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < len - 2; i++) {
    // 如果当前的数都比0大了，那么后边的数字就肯定更大了，不可能相加为0，所以直接中断循环
    if (nums[i] > 0) break;
    // 当前值和上一个值相等，直接跳过
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1;
    let r = len - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum < 0) {
        l++;
        continue;
      }
      if (sum > 0) {
        r--;
        continue;
      }
      res.push([nums[i], nums[l], nums[r]]);

      while (l < r && nums[l] === nums[++l]) {}
      while (l < r && nums[r] === nums[--r]) {}
    }
  }
  return res;
};
