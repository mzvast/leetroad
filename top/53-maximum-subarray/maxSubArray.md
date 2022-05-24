## 53. 最大子数组和
```
给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

子数组 是数组中的一个连续部分。

 

示例 1：

输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
示例 2：

输入：nums = [1]
输出：1
示例 3：

输入：nums = [5,4,-1,7,8]
输出：23
 

提示：

1 <= nums.length <= 105
-104 <= nums[i] <= 104
 

进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。
```
%

```js
// 前缀和+贪心
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    const n = nums.length;
    const sum = Array(n + 1).fill(0);// 前缀和
    for (let i = 0; i < n; i++) sum[i + 1] = sum[i] + nums[i];
    let min = 0,// j位置之前的最小值
        max = -Infinity; // j位置
    for (let i = 1; i < sum.length; i++) {
        min = Math.min(min, sum[i - 1]);
        max = Math.max(max, sum[i] - min);
    }
    return max;
};
```

```js
//dp
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    // dp[i] := 前i个元素的最大子数组和
    // dp[i] = dp[i-1]<0?nums[i-1]:dp[i-1]+nums[i]
    const n = nums.length;
    const dp = Array(n + 1).fill(0);
    let ans = -Infinity;
    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i - 1] < 0 ? nums[i-1] : dp[i - 1] + nums[i-1]
        ans = Math.max(ans, dp[i])
    }
    return ans;
};
```