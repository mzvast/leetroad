## 72. 编辑距离
```
给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。

你可以对一个单词进行如下三种操作：

插入一个字符
删除一个字符
替换一个字符
 

示例 1：

输入：word1 = "horse", word2 = "ros"
输出：3
解释：
horse -> rorse (将 'h' 替换为 'r')
rorse -> rose (删除 'r')
rose -> ros (删除 'e')
示例 2：

输入：word1 = "intention", word2 = "execution"
输出：5
解释：
intention -> inention (删除 't')
inention -> enention (将 'i' 替换为 'e')
enention -> exention (将 'n' 替换为 'x')
exention -> exection (将 'n' 替换为 'c')
exection -> execution (插入 'u')
 

提示：

0 <= word1.length, word2.length <= 500
word1 和 word2 由小写英文字母组成
```

%

```js
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    // dp[i][j] := word1的前i个单词转换成word2的前j个单词的最小操作数
    // dp[i][j] = 
    // [skip] if word1[i-1] === word2[j-1], return dp[i-1][j-1]
    // 在word1上操作
    // adc
    //  cd
    // [插入] adc[d]
    //          cd
    // = dp[i][j-1]
    // [删除] ad[c]
    //         cd
    // = dp[i-1][j]
    // [替换] ad[c]=>ad[d]
    //        cd
    // = dp[i-1][j-1]

    const m = word1.length, n = word2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(Infinity));

    // base case
    dp[0][0] = 0;
    // dp[0][..]
    for (let j = 0; j < n + 1; j++) dp[0][j] = j;
    // dp[..][0]
    for (let i = 0; i < m + 1; i++) dp[i][0] = i;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
            else {
                dp[i][j] = 1 + Math.min(
                    dp[i][j - 1], // add
                    dp[i - 1][j],// delete
                    dp[i - 1][j - 1]// replace
                )
            }
        }
    }

    return dp[m][n];
};
```