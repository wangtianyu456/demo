var subsets = function (nums) {
  const res = [];
  const len = nums.length;
  const subset = [];

  function dfs(index) {
    res.push(subset.slice());
    for (let i = index; i < len; i++) {
      subset.push(nums[i]);
      dfs(i + 1);
      subset.pop();
    }
  }
  dfs(0);
  return res;
};
subsets([1, 2, 3]);
