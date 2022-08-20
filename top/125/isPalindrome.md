## 125. 验证回文串
```
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

 

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
解释："amanaplanacanalpanama" 是回文串
示例 2:

输入: "race a car"
输出: false
解释："raceacar" 不是回文串
 

提示：

1 <= s.length <= 2 * 105
字符串 s 由 ASCII 字符组成
```
%
```js
// 双指针
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const n = s.length;
    s = s.toLocaleLowerCase();

    let l = 0, r = n - 1;
    while (l < r) {
        while (isNonNumberOrAlphabet(s[l])) l += 1;
        while (isNonNumberOrAlphabet(s[r])) r -= 1;
        if (s[l] !== s[r]) return false;
        l += 1;
        r -= 1;
    }
    return true;

    // 非数字或者字母
    function isNonNumberOrAlphabet(ch) {
        // 0-9
        // a-z
        const isNonNumber = ch < '0' || ch > '9';
        const isNonAlphabet = ch < 'a' || ch > 'z';
        return isNonNumber && isNonAlphabet;
    }
};
```

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.replace(/[^A-Za-z0-9]/ig, '').toLocaleLowerCase();
    return s === s.split('').reverse().join('')
};
```