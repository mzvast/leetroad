/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    // dp[i] := 前i个数的最大乘积
    // dp[i] = max(dp[i], max((i-j)*j, j*dp[i-j])), 0<j<i

    const dp = Array(n + 1).fill(0);
    // base case
    dp[2] = 1;

    for (let i = 3; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], Math.max((i - j) * j, j * dp[i - j]));
        }
    }

    return dp[n];
};
