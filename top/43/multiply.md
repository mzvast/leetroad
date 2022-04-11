## 43. 字符串相乘
```
给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。

 

示例 1:

输入: num1 = "2", num2 = "3"
输出: "6"
示例 2:

输入: num1 = "123", num2 = "456"
输出: "56088"
 

提示：

1 <= num1.length, num2.length <= 200
num1 和 num2 只能由数字组成。
num1 和 num2 都不包含任何前导零，除了数字0本身。
```
%
```js
// 大整数、模拟竖式
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    const m = num1.length,
        n = num2.length,
        // 乘法竖式
        a = Array(m).fill(0),
        b = Array(n).fill(0),
        c = Array(m + n + 1).fill(0);
    for (let i = 0; i < m; i++) a[i] = num1[m - i - 1];
    for (let i = 0; i < n; i++) b[i] = num2[n - i - 1];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            c[i + j] += a[i] * b[j];
        }
    }
    // 处理进位
    for (let i = 0; i < m + n; i++) {
        const carrier = c[i] / 10 >> 0;
        c[i] = c[i] % 10;
        if (carrier) c[i + 1] += carrier;
    }
    // 移除先导0
    while (c.length > 1 && c[c.length - 1] === 0) c.pop();
    let ans = '';
    for (let x of c) ans = x + ans;
    return ans;
};
```