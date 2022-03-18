/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    // dp[i] := 拼凑i元所需最小的硬币数量
    // dp[i] = min(dp[i-j]+1) , j为硬币面额
    const dp = Array(amount + 1).fill(-1); // -1 不可达
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let x of coins) {
            if (i < x) continue;
            if (dp[i - x] === -1) continue;
            if (dp[i] === -1 || dp[i] > dp[i - x] + 1) dp[i] = dp[i - x] + 1;
        }
    }

    return dp[amount];
};
