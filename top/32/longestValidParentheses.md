## 32. 最长有效括号
```
给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。

 

示例 1：

输入：s = "(()"
输出：2
解释：最长有效括号子串是 "()"
示例 2：

输入：s = ")()())"
输出：4
解释：最长有效括号子串是 "()()"
示例 3：

输入：s = ""
输出：0
 

提示：

0 <= s.length <= 3 * 104
s[i] 为 '(' 或 ')'
```

%

```js
// stack
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    // https://www.youtube.com/watch?v=r0-zx5ejdq0
    const n = s.length;
    // 012345678
    // )()())())
    //
    let ans = 0;
    const stack = [-1]; // 栈底部是第一个没有匹配的右括号的下标

    for (let i = 0; i < n; i++) {
        const top = stack[stack.length - 1];
        if (s[top] === '(' && s[i] === ')') {
            stack.pop();
            const newTop = stack[stack.length - 1];
            ans = Math.max(ans, i - newTop);
        } else {
            stack.push(i);
        }
    }
    return ans;
};
```