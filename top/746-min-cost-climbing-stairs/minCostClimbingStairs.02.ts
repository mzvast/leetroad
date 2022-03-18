/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    // dp[i] := 爬到第i最低花费
    // dp[n] = min(dp[n-1],dp[n-2])+ cost[n]

    cost.push(0); // 最后一级为0
    const n = cost.length;
    let dp = Array(n).fill(0);
    // base case
    dp[0] = cost[0];
    dp[1] = cost[1];

    for (let i = 2; i < n; i++) {
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
    }

    return dp[n - 1];
};
