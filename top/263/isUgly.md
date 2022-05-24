## 263. 丑数
```
丑数 就是只包含质因数 2、3 和 5 的正整数。

给你一个整数 n ，请你判断 n 是否为 丑数 。如果是，返回 true ；否则，返回 false 。

 

示例 1：

输入：n = 6
输出：true
解释：6 = 2 × 3
示例 2：

输入：n = 1
输出：true
解释：1 没有质因数，因此它的全部质因数是 {2, 3, 5} 的空集。习惯上将其视作第一个丑数。
示例 3：

输入：n = 14
输出：false
解释：14 不是丑数，因为它包含了另外一个质因数 7 。
 

提示：

-231 <= n <= 231 - 1
```
%
```js
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
    // n = 2**a*3**b*5**c
    // 把2、3、5除光，最后是1则是丑数
    if (n < 1) return false;
    const nums = [2, 3, 5];
    for (let x of nums) {
        while (n % x === 0) {
            n = n / x >> 0;
        }
    }

    return n === 1;
};
```