/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const n = prices.length;
    const rest = Array(n + 1).fill(0);
    const hold = Array(n + 1).fill(0);
    const sold = Array(n + 1).fill(0);

    // base case
    rest[0] = 0;
    hold[0] = -Infinity;
    sold[0] = 0;

    for (let i = 1; i <= n; i++) {
        rest[i] = Math.max(rest[i - 1], sold[i - 1]);
        hold[i] = Math.max(rest[i - 1] - prices[i - 1], hold[i - 1]);
        sold[i] = hold[i - 1] + prices[i - 1];
    }

    return Math.max(rest[n], hold[n], sold[n]);
};
