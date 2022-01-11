const coinChange = function (coins, amount) {
  // 计算当前总额所需的硬币数，就是计算减去当前硬币的情况下，所需的最小的硬币数，即 dp[n-coins[i]]，加上 1 就是组成当前总额所需的所有的硬币数
  // dp[n] = Math.min(dp[n], dp[n - coins[i] + 1])
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
