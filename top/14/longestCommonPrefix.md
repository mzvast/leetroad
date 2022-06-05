## 14. 最长公共前缀
```
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

 

示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"
示例 2：

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
 

提示：

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] 仅由小写英文字母组成
```

%

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    const maxLen = strs.map((str) => str.length).reduce((pre, cur) => Math.min(pre, cur));
    const ways = strs.length;
    let i = 0
    top: for (; i < maxLen; i++) {
        const first = strs[0][i];
        for (j = 1; j < ways; j++) {
            if (strs[j][i] !== first) {
                break top;
            }
        }
    }
    return strs[0].slice(0, i);
};
```