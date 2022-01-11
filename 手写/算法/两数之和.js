const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    const diff = target - cur;
    if (map.has(diff)) {
      return [map.get(diff), i];
    } else {
      map.set(cur, i);
    }
  }
};
