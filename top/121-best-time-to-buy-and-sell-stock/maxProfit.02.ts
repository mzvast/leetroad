/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // max{price[j]-price[i]}  0<=i<j<=prices.length-1
    // L[i] 到第i天最低的price
    // P[i] 到第i天最大的profit
    // P[i] = max(P[i-1], prices[i] - L[i])
    let L = prices[0]; // min price
    let P = 0; // max profit
    for (let i = 1, len = prices.length; i < len; i++) {
        L = Math.min(L, prices[i]);
        P = Math.max(P, prices[i] - L);
    }
    return P;
};

// time O(n)
// 滚动数组
//space O(1)