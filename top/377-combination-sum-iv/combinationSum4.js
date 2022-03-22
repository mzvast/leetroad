/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    // dp[i] := 组成总和为i的组合数
    // dp[i] = sum(dp[i-x])

    const dp = Array(target + 1).fill(0);

    // base case

    dp[0] = 1;

    for (let i = 1; i <= target; i++) {
        for (let x of nums) {
            if (i - x < 0) continue;
            dp[i] += dp[i - x];
        }
    }

    return dp[target];
};
