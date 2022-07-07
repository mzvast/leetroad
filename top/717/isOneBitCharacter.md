## 717. 1 比特与 2 比特字符
```
有两种特殊字符：

第一种字符可以用一比特 0 表示
第二种字符可以用两比特（10 或 11）表示
给你一个以 0 结尾的二进制数组 bits ，如果最后一个字符必须是一个一比特字符，则返回 true 。

 

示例 1:

输入: bits = [1, 0, 0]
输出: true
解释: 唯一的解码方式是将其解析为一个两比特字符和一个一比特字符。
所以最后一个字符是一比特字符。
示例 2:

输入：bits = [1,1,1,0]
输出：false
解释：唯一的解码方式是将其解析为两比特字符和两比特字符。
所以最后一个字符不是一比特字符。
 

提示:

1 <= bits.length <= 1000
bits[i] 为 0 或 1
```

%
```js
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
    // 霍夫曼编码，遇到1跳2位，遇到0跳1位
    let i = 0;
    const n = bits.length;
    while (i < n - 1) {
        if (bits[i] === 1) i += 2;
        else i += 1;
    }
    return i === n - 1;
};
```

```js
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
    // dp[i] := i..n是否可以构成1bit字符
    // for w of [0,10,11] if bits[i..i+w.length]===w, dp[i] = dp[i+w.length]
    // ans = dp[0]
    // 先判断最后是不是0
    if (bits[bits.length - 1] !== 0) return false;
    bits.pop();// 把最后一个去掉

    // 如果能构成，则ok
    const n = bits.length;
    const dp = Array(n + 1).fill(false);
    const bitsString = bits.join('');// 转换成字符串便于处理
    // base case
    dp[n] = true;

    const words = ['0', '10', '11'];

    for (let i = n - 1; i >= 0; i--) {
        for (let w of words) {
            if (i + w.length <= n && bitsString.substr(i, w.length) === w) {
                dp[i] = dp[i + w.length];
                break;
            }
        }
    }
    return dp[0];
};
```