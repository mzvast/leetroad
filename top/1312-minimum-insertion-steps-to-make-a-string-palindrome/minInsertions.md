## 1312. 让字符串成为回文串的最少插入次数

```
给你一个字符串 s ，每一次操作你都可以在字符串的任意位置插入任意字符。

请你返回让 s 成为回文串的 最少操作次数 。

「回文串」是正读和反读都相同的字符串。

 

示例 1：

输入：s = "zzazz"
输出：0
解释：字符串 "zzazz" 已经是回文串了，所以不需要做任何插入操作。
示例 2：

输入：s = "mbadm"
输出：2
解释：字符串可变为 "mbdadbm" 或者 "mdbabdm" 。
示例 3：

输入：s = "leetcode"
输出：5
解释：插入 5 个字符后字符串变为 "leetcodocteel" 。
 

提示：

1 <= s.length <= 500
s 中所有字符都是小写字母。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-insertion-steps-to-make-a-string-palindrome
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```
%
```js
/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
    // dp[i][j] := 从i到j变成回文的最小操作次数
    // dp[i][j] 
    // i,i+1,..j-1,j
    // if s[i]===s[j], dp[i][j] = dp[i+1][j-1]
    // else dp[i][j] = Math.min(dp[i][j-1],dp[i+1][j])+1
    const n = s.length;
    const dp = Array(n).fill().map(() => Array(n).fill(0));

    // base case
    // dp[i][i] = 0
    // for (let i = 0; i < n; i++) {
    //     dp[i][i] = 0;
    // }

    for (let l = 1; l <= n; l++) {
        // j-i=l
        for (let i = 0, j = l + i; j < n; i++, j++) {
            if (s[i] === s[j]) dp[i][j] = dp[i + 1][j - 1];
            else dp[i][j] = Math.min(dp[i][j - 1], dp[i + 1][j]) + 1;
        }
    }

    return dp[0][n-1];
};
```
