## 1856. 子数组最小乘积的最大值
```
一个数组的 最小乘积 定义为这个数组中 最小值 乘以 数组的 和 。

比方说，数组 [3,2,5] （最小值是 2）的最小乘积为 2 * (3+2+5) = 2 * 10 = 20 。
给你一个正整数数组 nums ，请你返回 nums 任意 非空子数组 的最小乘积 的 最大值 。由于答案可能很大，请你返回答案对  109 + 7 取余 的结果。

请注意，最小乘积的最大值考虑的是取余操作 之前 的结果。题目保证最小乘积的最大值在 不取余 的情况下可以用 64 位有符号整数 保存。

子数组 定义为一个数组的 连续 部分。

 

示例 1：

输入：nums = [1,2,3,2]
输出：14
解释：最小乘积的最大值由子数组 [2,3,2] （最小值是 2）得到。
2 * (2+3+2) = 2 * 7 = 14 。
示例 2：

输入：nums = [2,3,3,1,2]
输出：18
解释：最小乘积的最大值由子数组 [3,3] （最小值是 3）得到。
3 * (3+3) = 3 * 6 = 18 。
示例 3：

输入：nums = [3,1,5,6,4,2]
输出：60
解释：最小乘积的最大值由子数组 [5,6,4] （最小值是 4）得到。
4 * (5+6+4) = 4 * 15 = 60 。
 

提示：

1 <= nums.length <= 105
1 <= nums[i] <= 107
```

%

```js
// 单调栈+前缀和+BigInt
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumMinProduct = function (nums) {
    // i-a.. i.. i+b 假设i为子数组的最小值
    // 求和区间即需要找到最近的比他小的左右位置

    // 虚拟位置，最左边-1，最右边n
    const n = nums.length;
    const l = Array(n).fill(-1),
        r = Array(n).fill(n),
        s = [];// 单调递增栈
    for (let i = 0; i < n; i++) {
        while (s.length && nums[i] <= nums[s[s.length - 1]]) {
            r[s[s.length - 1]] = i;
            s.pop();
        }
        if (s.length) l[i] = s[s.length - 1];
        s.push(i)
    }

    // 前缀和
    const prefixSum = Array(n + 1).fill(0);// Si,0<=i<=n
    for (let i = 0; i < n; i++) prefixSum[i + 1] = prefixSum[i] + nums[i];

    let ans = 0n; // 求最大值
    for (let i = 0; i < n; i++) {
        let tmp = BigInt(nums[i]) * BigInt(prefixSum[r[i]] - prefixSum[l[i] + 1])
        if (tmp > ans) ans = tmp;
        // ans = Math.max(ans, nums[i] * (prefixSum[r[i]] - prefixSum[l[i] + 1]));
    }
    return ans % BigInt(1e9 + 7);
};
```