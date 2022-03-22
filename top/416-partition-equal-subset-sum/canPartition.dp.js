/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    // 01背包问题

    const sum = nums.reduce((pre, cur) => pre + cur, 0);
    if (sum % 2) return false; // 不能整除
    const target = sum / 2;

    // dp[i][j] := 前i个数字能否凑成j
    // dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i]]
    // ans = dp[n][target]
    const n = nums.length;

    const dp = Array(n + 1)
        .fill()
        .map(() => Array(target + 1).fill(false));
    // base case
    dp[0][0] = true;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= target; j++) {
            if (j - nums[i - 1] >= 0) {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    // console.log(dp);
    return dp[n][target];
};
