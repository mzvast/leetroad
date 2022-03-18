/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // 每一段上升区间都赚
    let ans = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - prices[i - 1] > 0) {
            ans += prices[i] - prices[i - 1];
        }
    }
    return ans;
};
