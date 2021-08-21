/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
    // dp[i][j] := 到达i，j时的最大礼物价值
    // dp[i][j] = max(dp[i][j-1],dp[i-1][j])+gird[i][j]

    const m = grid.length,
        n = grid[0].length;
    const dp = Array(m + 1)
        .fill(0)
        .map(() => Array(n + 1).fill(0));

    // base case
    // dp[..][0] = 0
    // dp[0][..] = 0

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] =
                Math.max(dp[i][j - 1], dp[i - 1][j]) + grid[i - 1][j - 1];
        }
    }

    return dp[m][n];
};
