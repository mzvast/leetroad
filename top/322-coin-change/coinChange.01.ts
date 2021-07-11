/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    // dp[i][j] := 用i种面值组成j总和的最少硬币数量
    // base case
    // dp[-1][0] = dp[-1][j] = Infinity
    // dp[i][j] = min(dp[i][j], dp[i-1][j-k*coin_i]+k)
    //          = min(dp[i][j], dp[i][j-coin_i]+1) 【pick】
    // 可滚动数组降维
    const n = amount;
    let dp = Array(n + 1).fill(Infinity);

    //// dp[i] := 构成总和i所需的最少硬币数
    //// dp[i] = min{dp[i],dp[i - j] + 1}, for j in coins
    //// j<=i<=amount
    dp[0] = 0;
    // dp[i]
    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            if (dp[i - coin] === Infinity) continue;
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};
