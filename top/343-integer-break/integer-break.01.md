## 343. 整数拆分
```
给定一个正整数 n ，将其拆分为 k 个 正整数 的和（ k >= 2 ），并使这些整数的乘积最大化。

返回 你可以获得的最大乘积 。

 

示例 1:

输入: n = 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1。
示例 2:

输入: n = 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
 

提示:

2 <= n <= 58
```

%

```js
// https://www.youtube.com/watch?v=in6QbUPMJ3I
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    // dp[i] := 前i个数的最大乘积
    // dp[i] = max(dp[i], max((i-j)*j, j*dp[i-j])), 0<j<i

    const dp = Array(n + 1).fill(0);
    // base case
    dp[2] = 1;

    for (let i = 3; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], Math.max((i - j) * j, j * dp[i - j]));
        }
    }

    return dp[n];
};
```