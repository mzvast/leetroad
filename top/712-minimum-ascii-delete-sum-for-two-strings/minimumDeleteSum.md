## 712. 两个字符串的最小ASCII删除和

```
给定两个字符串s1 和 s2，返回 使两个字符串相等所需删除字符的 ASCII 值的最小和 。

 

示例 1:

输入: s1 = "sea", s2 = "eat"
输出: 231
解释: 在 "sea" 中删除 "s" 并将 "s" 的值(115)加入总和。
在 "eat" 中删除 "t" 并将 116 加入总和。
结束时，两个字符串相等，115 + 116 = 231 就是符合条件的最小和。
示例 2:

输入: s1 = "delete", s2 = "leet"
输出: 403
解释: 在 "delete" 中删除 "dee" 字符串变成 "let"，
将 100[d]+101[e]+101[e] 加入总和。在 "leet" 中删除 "e" 将 101[e] 加入总和。
结束时，两个字符串都等于 "let"，结果即为 100+101+101+101 = 403 。
如果改为将两个字符串转换为 "lee" 或 "eet"，我们会得到 433 或 417 的结果，比答案更大。
 

提示:

0 <= s1.length, s2.length <= 1000
s1 和 s2 由小写英文字母组成
```
%

```js
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
    // dp[i][j] := 将s1前i个元素变成和s2相等所需删除的ascii值的最小和
    // if s1[i-1] === s2[j-1] 不需要删除 dp[i][j] = dp[i-1][j-1]
    // else dp[i][j] = min(dp[i][j-1]+asciiOf(s2[j-1]),
    //                     dp[i-1][j]+asciiOf(s1[i-1]));

    const m = s1.length,
        n = s2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(Infinity));

    // base case

    dp[0][0] = 0;

    // dp[..][0]
    for (let i = 1; i <= m; i++) {
        dp[i][0] = s1[i - 1].charCodeAt(0); //  ascii at each position
        if (i >= 2) dp[i][0] = dp[i][0] + dp[i - 1][0]; // prefixSum
    }
    // dp[0][..]
    for (let j = 1; j <= n; j++) {
        dp[0][j] = s2[j - 1].charCodeAt(0); //  ascii at each position
        if (j >= 2) dp[0][j] = dp[0][j] + dp[0][j - 1]; // prefixSum
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
            else dp[i][j] = Math.min(dp[i][j - 1] + s2[j - 1].charCodeAt(0),
                dp[i - 1][j] + s1[i - 1].charCodeAt(0));
        }
    }

    return dp[m][n];
};
```