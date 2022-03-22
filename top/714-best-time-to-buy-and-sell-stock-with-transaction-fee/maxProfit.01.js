/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
    // dp[i][0/1] := 第i天不持有/持有股票的最大收益
    // dp[i][0] = max(dp[i-1][0], dp[i-1][1]+prices[i]-fee)  (本来就没有/前一天有，当天卖掉了)
    // dp[i][1] = max(dp[i-1][1],dp[i-1][0]-prices[i]) (本来就有，当天买入)
    // ans = max(dp[n][0],dp[n][1])

    const n = prices.length;
    const dp = Array(n)
        .fill()
        .map(() => Array(2).fill(-Infinity));

    // base case
    // dp[0][..]
    dp[0][0] = 0;
    dp[0][1] = -prices[0];

    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    }

    return Math.max.apply(null, dp[n - 1]);
};
