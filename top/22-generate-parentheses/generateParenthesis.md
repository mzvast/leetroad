## 22. 括号生成
```
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

 

示例 1：

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
示例 2：

输入：n = 1
输出：["()"]
 

提示：

1 <= n <= 8
```
%

```js
// 回溯
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {

    const ans = [];
    bt([], 0, 0, 0);
    return ans;

    function bt(path, open, close, idx) {
        if (idx === 2 * n) {
            if (open !== close) return;
            ans.push(path.join(''));
            return;
        }

        // (
        if (open < n) {
            path.push('(');
            bt(path, open + 1, close, idx + 1);
            path.pop();
        }

        // )
        if (open > close) {
            path.push(')');
            bt(path, open, close + 1, idx + 1);
            path.pop();
        }
    }
};
```