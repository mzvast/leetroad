// k种面值的硬币
// 面值分别为c1,c2,c3...ck
// 每种硬币的数量无限
// 总金额amount
// 最少需要几枚凑出这个金额?
// 如果不可能，返回-1

/**
 *
 *
 * @param {number[]} coins
 * @param {number} amount
 * @returns
 */
function coinChange(coins, amount) {
    // base case: amount=0
    // 状态: amount
    // 选择: 所有硬币的面值
    // dp[n]: 输入一个目标金额，凑出目标金额的最少硬币数量

    // dp[n]
    // let res = Infinity
    // for coin of coins
    // res = min(res, 1+dp(n-coin))
    // return res

    // dp数组定义：当目标金额是i时（状态），需要dp[i]枚硬币（选择）

    // amount + 1 代表无法达成
    const dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    // 遍历所有状态取值
    for (let i = 0; i < dp.length; i++) {
        // 所有选择的最小值
        for (const coin of coins) {
            // 子问题无解
            if (i - coin < 0) continue;
            dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
        }
    }
    return dp[amount] === amount + 1 ? -1 : dp[amount];
}

console.log(coinChange([1, 2, 5], 50));
