/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    const n = cost.length;
    if (n <= 1) return 0;
    const two = minCostClimbingStairs(cost.slice(0, n - 2)) + cost[n - 2];
    const one = minCostClimbingStairs(cost.slice(0, n - 1)) + cost[n - 1];
    return Math.min(two, one);
};
