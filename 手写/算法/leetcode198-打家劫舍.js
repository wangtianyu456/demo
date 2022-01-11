/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  // 因为不能连续偷，所以到达第 n 个房间的时候的最大值就是，Math.max(dp[n-2] + num,dp[n-1])
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  const dp = [];
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    const num = nums[i];
    dp[i] = Math.max(dp[n - 2], num + dp[n - 1]);
  }
  return Math.max(dp[nums.length - 1], dp[nums.length - 2]);
};
