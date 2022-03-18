/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function (costs) {
    // dp[i][j] := 图完i个房子，最后一个用j颜色的最小花费
    // dp[i][j] = min(dp[i-1][k])+costs[i][j], k!==j
    // ans = min(dp[n][j]) 0<=j<n
    const n = costs.length;
    const colorNum = costs[0].length;
    const dp = Array(n)
        .fill(0)
        .map(() => Array(colorNum).fill(0));

    // base case
    for (let i = 0; i < colorNum; i++) {
        dp[0][i] = costs[0][i];
    }

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < colorNum; j++) {
            let min_pre = Infinity; // 前一个非当前颜色的最小值
            for (let k = 0; k < colorNum; k++) {
                if (k === j) continue;
                min_pre = Math.min(min_pre, dp[i - 1][k]);
            }
            dp[i][j] = costs[i][j] + min_pre;
        }
    }

    return Math.min(...dp[n - 1]);
};
