/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    // dp[i][j] := 前i个元素总和为j的方法数
    // dp[i][j] = dp[i-1][j-x] + dp[i-1][j+x], x=nums[i]
    // ans = dp[n][target]

    // target可能为负数

    const n = nums.length;
    const sum = nums.reduce((pre, cur) => pre + cur, 0);
    const offset = sum + Math.abs(target); // j+x =>sum+|target|

    const dp = Array(n + 1)
        .fill()
        .map(() => Array(2 * offset + 1).fill(0));

    const getJ = (j) => j + offset; // hash

    // base case
    dp[0][getJ(0)] = 1;

    for (let i = 1; i <= n; i++) {
        const x = nums[i - 1];

        for (let j = -sum; j <= sum; j++) {
            dp[i][getJ(j)] = dp[i - 1][getJ(j - x)] + dp[i - 1][getJ(j + x)];
        }
    }

    return dp[n][getJ(target)];
};
