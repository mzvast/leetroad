## 322. 零钱兑换
```
给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

你可以认为每种硬币的数量是无限的。

 

示例 1：

输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1
示例 2：

输入：coins = [2], amount = 3
输出：-1
示例 3：

输入：coins = [1], amount = 0
输出：0
 

提示：

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104
```

%
```js
// 2d dp
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    // dp[i][j] := 前i种硬币可以构成j的最少个数
    // dp[i][j] = min(dp[i-1][j],1+dp[i][j-coins[i-1]])

    const n = coins.length;
    const dp = Array.from({ length: n + 1 }, () => Array(amount + 1).fill(Infinity));
    // base case
    for (let i = 0; i <= n; i++) dp[i][0] = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= amount; j++) {
            if (j - coins[i - 1] >= 0) {
                dp[i][j] = Math.min(dp[i - 1][j], 1 + dp[i][j - coins[i - 1]]);
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[n][amount] === Infinity ? -1 : dp[n][amount];
};
```

```js
// 1d dp
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    // dp[i] := 构成总金额为i所需最少硬币个数
    // dp[i] = min(dp[i-x]+1)
    // ans = dp[amount]
    const dp = Array(amount + 1).fill(Infinity);

    // base case 
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let x of coins) {
            if (i - x < 0) continue;
            dp[i] = Math.min(dp[i], dp[i - x] + 1);
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};
```