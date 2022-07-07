## 680. 验证回文字符串 Ⅱ
```
给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

 

示例 1:

输入: s = "aba"
输出: true
示例 2:

输入: s = "abca"
输出: true
解释: 你可以删除c字符。
示例 3:

输入: s = "abc"
输出: false
 

提示:

1 <= s.length <= 105
s 由小写英文字母组成
```
%
```js
双指针
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    // 有一次豁免机会
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s[i] !== s[j]) return isValid(i, j - 1) || isValid(i + 1, j);
    }
    return true;
    function isValid(start, end) {
        for (let i = start, j = end; i < j; i++, j--) {
            if (s[i] !== s[j]) return false;
        }
        return true;
    }
};
```