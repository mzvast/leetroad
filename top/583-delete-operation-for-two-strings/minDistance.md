## 583. 两个字符串的删除操作
```
给定两个单词 word1 和 word2 ，返回使得 word1 和  word2 相同所需的最小步数。

每步 可以删除任意一个字符串中的一个字符。

 

示例 1：

输入: word1 = "sea", word2 = "eat"
输出: 2
解释: 第一步将 "sea" 变为 "ea" ，第二步将 "eat "变为 "ea"
示例  2:

输入：word1 = "leetcode", word2 = "etco"
输出：4
 

提示：

1 <= word1.length, word2.length <= 500
word1 和 word2 只包含小写英文字母

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/delete-operation-for-two-strings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

```js
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    // dp[i][j] := 将word1的前i个字符变成和word2的前j个字符相同所需的最小步数
    // if word1[i-1] === word2[j-1]  dp[i][j] = dp[i-1][j-1] skip
    // else dp[i][j] = 1+ min(dp[i][j-1],dp[i-1][j]) delete any one
    // abc
    // cba

    const m = word1.length,
        n = word2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(Infinity));

    // base case

    //dp[..][0]
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i; // delete
    }

    // dp[0][..] 
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j; // delete
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
            else dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    return dp[m][n];
};
```