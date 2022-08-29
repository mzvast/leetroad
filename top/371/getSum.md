## 371. 两整数之和
```
给你两个整数 a 和 b ，不使用 运算符 + 和 - ​​​​​​​，计算并返回两整数之和。

 

示例 1：

输入：a = 1, b = 2
输出：3
示例 2：

输入：a = 2, b = 3
输出：5
 

提示：

-1000 <= a, b <= 1000
```

%

```js
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    // 01
    // 10
    // &<<1求进位 
    // ^(xor)求当前位置的结果
    while (b != 0) {
        const carrier = (a & b) << 1;
        a = a ^ b;
        b = carrier;
    }
    return a;
};
```