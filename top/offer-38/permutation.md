## 剑指 Offer 38. 字符串的排列
```
输入一个字符串，打印出该字符串中字符的所有排列。

 

你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

 

示例:

输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]
 

限制：

1 <= s 的长度 <= 8
```
%
```js
// hashMap + bt
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {

    // 可能重复

    const cnt = {};

    for (let x of s) cnt[x] = (cnt[x] || 0) + 1;

    const ans = [];
    bt('');
    return ans;

    function bt(path) {
        if (path.length === s.length) {
            ans.push(path);
            return;
        }

        for (let x in cnt) {
            if (cnt[x] === 0) continue;
            // select
            cnt[x] -= 1;
            bt(path + x);
            // revert
            cnt[x] += 1;
        }

    }
}
```