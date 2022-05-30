## 1002. 查找共用字符
```
给你一个字符串数组 words ，请你找出所有在 words 的每个字符串中都出现的共用字符（ 包括重复字符），并以数组形式返回。你可以按 任意顺序 返回答案。
 

示例 1：

输入：words = ["bella","label","roller"]
输出：["e","l","l"]
示例 2：

输入：words = ["cool","lock","cook"]
输出：["c","o"]
 

提示：

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] 由小写英文字母组成1002. 查找共用字符
给你一个字符串数组 words ，请你找出所有在 words 的每个字符串中都出现的共用字符（ 包括重复字符），并以数组形式返回。你可以按 任意顺序 返回答案。
 

示例 1：

输入：words = ["bella","label","roller"]
输出：["e","l","l"]
示例 2：

输入：words = ["cool","lock","cook"]
输出：["c","o"]
 

提示：

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] 由小写英文字母组成
```

%

```js
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    // 26个
    let ans = Array(26).fill(Infinity);// idx=>cnt
    const cur = Array(26).fill(0);
    for (let word of words) {
        for (let i = 0; i < 26; i++) cur[i] = 0;
        for (let w of word) cur[w.charCodeAt(0) - 97] += 1;
        for (let i = 0; i < 26; i++) ans[i] = Math.min(ans[i], cur[i]);
    }

    return ans.reduce((pre, cnt, curIdx) => {
        if (cnt > 0) {
            pre.push(...Array(cnt).fill(String.fromCharCode(97 + curIdx)));
        }
        return pre;
    }, [])
};
```