/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    // dp[i] := 0-i的最大乘积
    // dp[i] = max(dp[i], max((i-j)*j,j*dp[i-j])) ,0<j<i

    const dp = Array(n + 1).fill(0);
    dp[2] = 1;

    for (let i = 3; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            dp[i] = Math.max(dp[i], Math.max(i - j) * j, j * dp[i - j]);
        }
    }
    return dp[n];
};
