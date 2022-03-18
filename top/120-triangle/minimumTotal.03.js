/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    // dp[i][j] := 第i层选择第j个元素的最小路径和
    //  dp[i][j] =triangle[i][j]+ min(dp[i-1][j]+,dp[i-1][j-1])
    // ans = min(dp[n][j])
    const n = triangle.length;
    const dp = Array(n)
        .fill(0)
        .map(() => Array(n).fill(0));

    // base case
    dp[0][0] = triangle[0][0];

    for (let i = 1; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            if (j === 0) {
                // 左侧
                dp[i][j] = triangle[i][j] + dp[i - 1][j];
            } else if (j === i) {
                // 右侧
                dp[i][j] = triangle[i][j] + dp[i - 1][j - 1];
            } else {
                dp[i][j] =
                    triangle[i][j] + Math.min(dp[i - 1][j - 1], dp[i - 1][j]);
            }
        }
    }

    return Math.min(...dp[n - 1]);
};
