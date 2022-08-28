## 152. 乘积最大子数组
```
给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

测试用例的答案是一个 32-位 整数。

子数组 是数组的连续子序列。

 

示例 1:

输入: nums = [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
示例 2:

输入: nums = [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
 

提示:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
nums 的任何前缀或后缀的乘积都 保证 是一个 32-位 整数
```

%

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    // nums[i] 可能为负数
    // dp[i][j] := 以第i个数结尾的乘积最大/小值(0<=i<n)
    // dp[i][0] = max(dp[i-1]*nums[i-1],nums[i-1])
    // dp[i][1] = min(dp[i-1]*nums[i-1],nums[i-1])
    // ans = max(dp[..][0])

    const n = nums.length;

    const dp = Array.from({ length: n }, () => [-Infinity, +Infinity]);

    // base case
    dp[0][0] = nums[0];// max
    dp[0][1] = nums[0];// min

    let ans = nums[0];
    for (let i = 1; i < n; i++) {
        if (nums[i] > 0) {
            dp[i][0] = Math.max(dp[i - 1][0] * nums[i], nums[i]);
            dp[i][1] = Math.min(dp[i - 1][1] * nums[i], nums[i]);
        } else {
            dp[i][0] = Math.max(dp[i - 1][1] * nums[i], nums[i]);
            dp[i][1] = Math.min(dp[i - 1][0] * nums[i], nums[i]);
        }
        ans = Math.max(ans, dp[i][0]);
    }

    return ans;
};
```