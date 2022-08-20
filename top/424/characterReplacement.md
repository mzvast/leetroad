## 424. 替换后的最长重复字符
```
给你一个字符串 s 和一个整数 k 。你可以选择字符串中的任一字符，并将其更改为任何其他大写英文字符。该操作最多可执行 k 次。

在执行上述操作后，返回包含相同字母的最长子字符串的长度。

 

示例 1：

输入：s = "ABAB", k = 2
输出：4
解释：用两个'A'替换为两个'B',反之亦然。
示例 2：

输入：s = "AABABBA", k = 1
输出：4
解释：
将中间的一个'A'替换为'B',字符串变为 "AABBBBA"。
子串 "BBBB" 有最长重复字母, 答案为 4。
 

提示：

1 <= s.length <= 105
s 仅由大写英文字母组成
0 <= k <= s.length
```

%

```js
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    // sliding window
    // 满足 window.length - maxFreqCnt<= k 的最大的window
    const n = s.length;
    const cnt = Array(26).fill(0);
    let [l, r, ans] = [0, 0, 0];
    let maxFreqCnt = 0; // 最高频的字母的出现次数
    while (r < n) {
        const toAddCode = getCode(s[r]);
        cnt[toAddCode] += 1;
        maxFreqCnt = Math.max(maxFreqCnt, cnt[toAddCode]);
        while (r - l + 1 - maxFreqCnt > k) {
            // not valid
            const toDelCode = getCode(s[l++]);
            cnt[toDelCode] -= 1;
        }
        // update ans
        ans = Math.max(ans, r - l + 1)

        r += 1;
    }

    return ans;
    /**
     * @param {string} ch
     */
    function getCode(ch) {
        return ch.charCodeAt() - 'A'.charCodeAt();
    }

};
```