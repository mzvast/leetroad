## 516. 最长回文子序列
```
给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。

子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。

 

示例 1：

输入：s = "bbbab"
输出：4
解释：一个可能的最长回文子序列为 "bbbb" 。
示例 2：

输入：s = "cbbd"
输出：2
解释：一个可能的最长回文子序列为 "bb" 。
 

提示：

1 <= s.length <= 1000
s 仅由小写英文字母组成
```

%

```js
// dp
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
    // dp[i][j] := s[i..j] 的LCS
    // dp[i][j] = 2 + dp[i+1][j-1] if s[i]===s[j]
    //           max(dp[i][j-1],dp[i+1][j])
    // ans = dp[0][n-1]
    const n = s.length;
    const dp = Array(n).fill().map(() => Array(n).fill(0));

    // base case
    // dp[i][i] = 1
    for (let i = 0; i < n; i++) dp[i][i] = 1;

    for (let l = 1; l <= n; l++) {
        for (let i = 0, j = i + l; j < n; i++, j++) {
            if (s[i] === s[j]) {
                dp[i][j] = 2 + dp[i + 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
            }
        }
    }

    return dp[0][n - 1];
};
```