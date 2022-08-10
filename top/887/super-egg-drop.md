## 887. 鸡蛋掉落
```
给你 k 枚相同的鸡蛋，并可以使用一栋从第 1 层到第 n 层共有 n 层楼的建筑。

已知存在楼层 f ，满足 0 <= f <= n ，任何从 高于 f 的楼层落下的鸡蛋都会碎，从 f 楼层或比它低的楼层落下的鸡蛋都不会破。

每次操作，你可以取一枚没有碎的鸡蛋并把它从任一楼层 x 扔下（满足 1 <= x <= n）。如果鸡蛋碎了，你就不能再次使用它。如果某枚鸡蛋扔下后没有摔碎，则可以在之后的操作中 重复使用 这枚鸡蛋。

请你计算并返回要确定 f 确切的值 的 最小操作次数 是多少？

 
示例 1：

输入：k = 1, n = 2
输出：2
解释：
鸡蛋从 1 楼掉落。如果它碎了，肯定能得出 f = 0 。 
否则，鸡蛋从 2 楼掉落。如果它碎了，肯定能得出 f = 1 。 
如果它没碎，那么肯定能得出 f = 2 。 
因此，在最坏的情况下我们需要移动 2 次以确定 f 是多少。 
示例 2：

输入：k = 2, n = 6
输出：3
示例 3：

输入：k = 3, n = 14
输出：4
 

提示：

1 <= k <= 100
1 <= n <= 104
```

%

```js
// 二分+dp
/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function (k, n) {
    // dp[k][n]
    // 第一次放鸡蛋有n种选择，对于每一个子问题
    // 放在第i层(1<=i<=n)
    // 坏了: dp[k-1][i-1]
    // 没坏: dp[k][n-i]
    // dp[k][n] = 1 + min{max(dp[k-1][i-1],dp[k][n-i])} 其中0<i=<n

    const memo = Array(k + 1).fill().map(() => Array(n + 1).fill(Infinity));

    // base case
    // dp[0][..] = 0 没有蛋
    // dp[..][0] = 0 没有楼
    // dp[1][n] = n 一个蛋
    // dp[k][1] = 1 一层楼

    // console.log(dp);

    function dp(k, n) {
        if (k === 0) return 0;
        if (n === 0) return 0;
        if (k === 1) return n;
        if (n === 1) return 1;
        let ans = memo[k][n];
        if (ans !== Infinity) return ans;
        // for (let i = 1; i <= n; i++) {
        //     ans = Math.min(ans, 1 + Math.max(dp(k - 1, i - 1), dp(k, n - i)));
        // }

        // 二分优化搜索
        // f(i) =  dp(k - 1, i - 1) 单调递减
        // g(i) = dp(k, n - i) 单调递增
        // 搜索第一个使得 f(i) - g(i) >=0 的值

        let l = 1, r = n + 1;
        while (l < r) {
            const mid = (l + (r - l) / 2) >> 0;
            if (dp(k - 1, mid - 1) >= dp(k, n - mid)) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        ans = 1 + Math.max(dp(k - 1, l - 1), dp(k, n - l));
        // ans = Math.min(ans, 1 + binarySearch01(1, n, k));
        memo[k][n] = ans;
        return ans;
    }






    return dp(k, n);

    // return getResult(k, n);
};

function getResult(k, n) {
    const dp = Array(k + 1).fill().map(() => Array(n + 1).fill(Infinity));

    // base case
    // dp[0][..] = 0 没有蛋
    for (let j = 0; j <= n; j++) dp[0][j] = 0;
    // dp[..][0] = 0 没有楼
    for (let i = 0; i <= k; i++) dp[i][0] = 0;
    // dp[1][n] = n 一个蛋
    for (let j = 0; j <= n; j++) dp[1][j] = j;
    // dp[k][1] = 1 一层楼
    for (let i = 0; i <= k; i++) dp[i][1] = 1;

    // console.log(dp);

    for (let i = 1; i <= k; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = Math.min(dp[i][j], 1 + Math.max(dp[i - 1][j - 1], dp[i][n - j]));
        }
    }

    return dp[k][n];
}
```

```js
// 纯dp
// TLE
/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function (k, n) {
    // dp[k][n]
    // 第一次放鸡蛋有n种选择，对于每一个子问题
    // 放在第i层(1<=i<=n)
    // 坏了: dp[k-1][i-1]
    // 没坏: dp[k][n-i]
    // dp[k][n] = 1 + min{max(dp[k-1][i-1],dp[k][n-i])} 其中0<i=<n

    const memo = Array(k + 1).fill().map(() => Array(n + 1).fill(Infinity));

    // base case
    // dp[0][..] = 0 没有蛋
    // dp[..][0] = 0 没有楼
    // dp[1][n] = n 一个蛋
    // dp[k][1] = 1 一层楼

    // console.log(dp);

    function dp(k, n) {
        if (k === 0) return 0;
        if (n === 0) return 0;
        if (k === 1) return n;
        if (n === 1) return 1;
        let ans = memo[k][n];
        if (ans !== Infinity) return ans;
        for (let i = 1; i <= n; i++) {
            ans = Math.min(ans, 1 + Math.max(dp(k - 1, i - 1), dp(k, n - i)));
        }
        memo[k][n] = ans;
        return ans;
    }

    return dp(k, n);

    // return getResult(k, n);
};

function getResult(k, n) {
    const dp = Array(k + 1).fill().map(() => Array(n + 1).fill(Infinity));

    // base case
    // dp[0][..] = 0 没有蛋
    for (let j = 0; j <= n; j++) dp[0][j] = 0;
    // dp[..][0] = 0 没有楼
    for (let i = 0; i <= k; i++) dp[i][0] = 0;
    // dp[1][n] = n 一个蛋
    for (let j = 0; j <= n; j++) dp[1][j] = j;
    // dp[k][1] = 1 一层楼
    for (let i = 0; i <= k; i++) dp[i][1] = 1;

    // console.log(dp);

    for (let i = 1; i <= k; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = Math.min(dp[i][j], 1 + Math.max(dp[i - 1][j - 1], dp[i][n - j]));
        }
    }

    return dp[k][n];
}
```