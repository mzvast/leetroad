/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    // dp[i] := 前i个乘积最大值
    // dp[i] = max(dp[i-1]*nums[i],nums[i])
    // nums[i] 可能为负数
    // 需要同时记录前i个乘积的最小值

    // dp[i][0] 最大值
    // dp[i][1] 最小值

    const dp = Array(nums.length)
        .fill(0)
        .map(() => [-Infinity, Infinity]);

    // base case

    dp[0][0] = nums[0];
    dp[0][1] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            dp[i][0] = Math.max(dp[i - 1][1] * nums[i], nums[i]);
            dp[i][1] = Math.min(dp[i - 1][0] * nums[i], nums[i]);
        } else {
            dp[i][0] = Math.max(dp[i - 1][0] * nums[i], nums[i]);
            dp[i][1] = Math.min(dp[i - 1][1] * nums[i], nums[i]);
        }
    }

    return Math.max.apply(
        null,
        dp.map((item) => item[0])
    );
};
