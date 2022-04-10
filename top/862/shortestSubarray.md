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
    for (let i = 1; i < n + 1; i++) sum[i] = sum[i - 1] + nums[i - 1];

    const q = []; //单调递增队列
    q.push(0);
    let ans = Infinity, pre = -1;
    for (let i = 1; i < n + 1; i++) {
        while (q.length && sum[i] - sum[q[0]] >= k) {
            pre = q.shift();
        }
        // update ans
        if (pre !== -1) ans = Math.min(ans, i - pre);

        while (q.length && sum[i] < sum[q[q.length - 1]]) q.pop();
        q.push(i);
    }

    return ans === Infinity ? -1 : ans;
};
```
```js
// 前缀和+单调队列
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
    // Sj1 .. Sj2 ..Sj3 .. Si
    // 假设固定了i的位置，且有Sj满足条件。为了尽可能短，则Sj1 Sj2 Sj3为单调队列中的位置

    // 若j3为求解Si满足条件的最小位置
    // 则当求解Si+1时，为了解更优，不必考虑j3之前的位置

    // 单调队列 相关条件
    // 入队：直接入队
    // 出队：满足和的条件的元素踢出去，不再考虑

    // 前缀和+单调队列
    const n = nums.length;
    const sum = Array(n + 1).fill(0);
    for (let i = 1; i < n + 1; i++) sum[i] = sum[i - 1] + nums[i - 1];
    const q = [];// 单调递增队列, idx of sum
    q.push(0); // 0位置合法

    let ans = -1,
        pos = -1; // 上次符合题目的位置
    for (let i = 1; i < sum.length; i++) {
        while (q.length && sum[i] - sum[q[0]] >= k) {
            pos = q[0];
            q.shift();
        }

        // update ans
        if (pos !== -1 && (i - pos < ans || ans === -1)) ans = i - pos;

        while (q.length && sum[i] < sum[q[q.length - 1]]) q.pop();
        q.push(i);
    }

    return ans;
};
```