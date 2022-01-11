const climbStairs = function (n) {
  let prev = 1;
  let cur = 1;
  for (let i = 2; i < n; i++) {
    const temp = cur;
    cur = prev + cur;
    prev = temp;
  }
  return cur;
};
const climbStairs = function (n) {
  let dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

const climbStairs = function (n) {
  const dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

const climbStairs = function (n) {
  let prev = 1;
  let cur = 1;
  for (let i = 2; i <= n; i++) {
    const temp = cur;
    cur = prev + cur;
    prev = temp;
  }
  return cur;
};
