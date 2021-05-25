/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function (cost) {
    const memo = {}
    // dp(i): 定义爬到第i级的最小花费
    return dp(cost, cost.length);

    function dp(cost, i) {
        if (i <= 1) return 0;
        if (memo[i]) return memo[i]
        memo[i] = Math.min(
            dp(cost, i - 1) + cost[i - 1],
            dp(cost, i - 2) + cost[i - 2])
        return memo[i];
    }
};