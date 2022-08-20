## 214. 最短回文串
```
给定一个字符串 s，你可以通过在字符串前面添加字符将其转换为回文串。找到并返回可以用这种方式转换的最短回文串。

 

示例 1：

输入：s = "aacecaaa"
输出："aaacecaaa"
示例 2：

输入：s = "abcd"
输出："dcbabcd"
 

提示：

0 <= s.length <= 5 * 104
s 仅由小写英文字母组成
```

%

```js
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
    // [xxx]yz
    // zy[xxx]yz
    const n = s.length;
    const rev = s.split('').reverse().join('');

    for (let i = n; i >= 0; i--) {
        if (s.slice(0, i) === rev.slice(n - i)) {
            return rev.slice(0, n - i) + s;
        }
    }
};
```