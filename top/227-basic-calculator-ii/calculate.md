## 227. 基本计算器 II
给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

整数除法仅保留整数部分。

你可以假设给定的表达式总是有效的。所有中间结果将在 [-231, 231 - 1] 的范围内。

注意：不允许使用任何将字符串作为数学表达式计算的内置函数，比如 eval() 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/basic-calculator-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

%

```js
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    // 双栈
    const num = [];// 数值
    const ops = [];// 操作符
    // 当ops要入栈的操作优先级低于栈顶元素，出栈计算1次


    s += '@';

    for (let i = 0, n = 0; i < s.length; i++) {
        const cur = s[i];
        // 空格
        if (cur === ' ') continue;
        // 数字
        if (level(cur) === 0) {
            n = n * 10 + Number(cur);
            continue;
        };
        num.push(n);
        n = 0;
        // 操作符
        while (ops.length > 0 && level(cur) <= level(top(ops))) {
            const b = num.pop();
            const a = num.pop();
            num.push(calc(a, ops.pop(), b));
        }
        ops.push(cur);
    }

    return num[0];

    function level(x) {
        switch (x) {
            case '+':
            case '-': return 1;
            case '*':
            case '/': return 2;
            case '@': return -1;
        }
        return 0
    }

    function calc(a, op, b) {
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return (a / b) >> 0;
        }
    }

    function top(stack) {
        return stack[stack.length - 1];
    }
};
```