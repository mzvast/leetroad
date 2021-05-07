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
    const memo = {};
    /**
     *
     * @param {number} n
     * @returns number
     */
    function dp(n) {
        // 查备忘录
        if (n in memo) return memo[n];

        // base case:
        if (n === 0) return 0;
        if (n < 0) return -1;
        let res = Infinity;
        for (const coin of coins) {
            const subProblem = dp(n - coin);
            if (subProblem === -1) {
                continue;
            }
            res = Math.min(res, 1 + subProblem);
        }

        // 记入备忘录
        memo[n] = Number.isFinite(res) ? res : -1;
        return memo[n];
    }

    return dp(amount);
}

console.log(coinChange([1, 2, 5], 50));
