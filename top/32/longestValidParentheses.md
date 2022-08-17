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
// https://www.youtube.com/watch?v=r0-zx5ejdq0

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    // ")()()))()())"

    const stack = [-1]; // 栈顶保存最后一个没有匹配到的右括号的下标

    const n = s.length;

    let ans = 0;
    for (let i = 0; i < n; i++) {
        if (s[top()] === '(' && s[i] === ')') {
            stack.pop();
            // update ans
            ans = Math.max(ans, i - top());
        } else {
            stack.push(i);
        }
    }

    return ans;

    function top() {
        return stack[stack.length - 1];
    }
};
```
