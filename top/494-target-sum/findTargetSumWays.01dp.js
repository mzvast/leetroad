/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    // A:= +号的元素
    // B:= -号的元素
    // sum(A)-sum(B) = target
    // sum(A) = target + sum(B)
    // 2*sum(A) = target + sum(B) + sum(A) = target + sum(nums)
    // sum(A) = (target + sum(nums)) / 2
    // 0-1 背包问题

    const S =
        (nums.reduce((pre, cur) => {
            return pre + cur;
        }, 0) +
            target) /
        2;

    if (!Number.isInteger(S) || S < 0) return 0;

    console.log(S);

    const n = nums.length;

    // dp[i][j] := 前i个元素，和为j的种数
    // dp[i][j] = dp[i-1][j] + dp[i-1][j-nums[i-1]] , 拿/不拿
    const dp = Array(n + 1)
        .fill(0)
        .map(() => Array(S + 1).fill(0));

    // base case
    // dp[0][..]
    // dp[..][0]

    for (let i = 0; i < n + 1; i++) {
        dp[i][0] = 1;
    }

    for (let i = 1; i < n + 1; i++) {
        for (let j = 0; j < S + 1; j++) {
            if (j - nums[i - 1] < 0) {
                // 背包装不下了
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i - 1][j - nums[i - 1]]; // 不装+装
            }
        }
    }

    return dp[n][S];
};
