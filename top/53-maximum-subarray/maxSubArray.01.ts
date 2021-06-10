// https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-53-maximum-subarray/

// 1维DP
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    // f[i] 用到前i个元素的最大值 maxSubArray(0..i)
    //状态转移 f[i] = f[i-1]>0 ? nums[i] + f[i-1]: nums[i];

    const dp = [nums[0]];
    for (let i = 1, len = nums.length; i < len; i++) {
        dp[i] = dp[i - 1] > 0 ? dp[i - 1] + nums[i] : nums[i];
    }
    return Math.max(...dp);
};
