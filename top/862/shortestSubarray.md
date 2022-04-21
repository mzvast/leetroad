## 862. 和至少为 K 的最短子数组

```
给你一个整数数组 nums 和一个整数 k ，找出 nums 中和至少为 k 的 最短非空子数组 ，并返回该子数组的长度。如果不存在这样的 子数组 ，返回 -1 。

子数组 是数组中 连续 的一部分。



示例 1：

输入：nums = [1], k = 1
输出：1
示例 2：

输入：nums = [1,2], k = 4
输出：-1
示例 3：

输入：nums = [2,-1,2], k = 3
输出：3


提示：

1 <= nums.length <= 105
-105 <= nums[i] <= 105
1 <= k <= 109
```

%

```js
// 前缀和+单调队列
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
    // S0 ..S1..Si
    // if Si-Sj satisfied condition then try to find a larger j' in [j+1,i-1]

    const n = nums.length;
    const sum = Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) sum[i + 1] = sum[i] + nums[i];

    const q = []; // 单调增队列
    let pre = -1;
    let ans = Infinity;
    for (let i = 0; i < n + 1; i++) {
        // 入
        while (q.length && sum[i] < sum[q[q.length - 1]]) q.pop();
        q.push(i);
        // 出
        while (q.length && sum[i] - sum[q[0]] >= k) pre = q.shift();
        if (pre !== -1) ans = Math.min(ans, i - pre);
    }

    return ans === Infinity ? -1 : ans;
};
```
