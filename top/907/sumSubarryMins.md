## 907. 子数组的最小值之和
```
给定一个整数数组 arr，找到 min(b) 的总和，其中 b 的范围为 arr 的每个（连续）子数组。

由于答案可能很大，因此 返回答案模 10^9 + 7 。

 

示例 1：

输入：arr = [3,1,2,4]
输出：17
解释：
子数组为 [3]，[1]，[2]，[4]，[3,1]，[1,2]，[2,4]，[3,1,2]，[1,2,4]，[3,1,2,4]。 
最小值为 3，1，2，4，1，1，2，1，1，1，和为 17。
示例 2：

输入：arr = [11,81,94,43,3]
输出：444
 

提示：

1 <= arr.length <= 3 * 104
1 <= arr[i] <= 3 * 104
```
%
```js
// 固定末尾的RMQ和值问题，单调栈
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
    // 关键位置a[i]
    // [a[0]..a[i-1], a[i]]

    // f(x)固定末尾的RMQ和值
    // f(x) = fx(i-1)+distance(a[i-1],a[i]))*arr[a[i]]
    const MOD = 1e9 + 7;
    const n = arr.length;
    const s = [];// 单调递增栈
    const sum = Array(n + 1).fill(0); // 前i个关键元素的min(b)和值
    let ans = 0;
    for (let i = 0; i < n; i++) {
        while (s.length && arr[i] < arr[top(s)]) s.pop();
        const idx = top(s);
        s.push(i);
        sum[s.length] = (sum[s.length - 1] + (i - idx) * arr[i]) % MOD;
        ans = (ans + sum[s.length]) % MOD;
    }

    return ans;

    function top(s) {
        if (s.length === 0) return -1;
        return s[s.length - 1];
    }
};
```