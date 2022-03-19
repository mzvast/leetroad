/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    // dp[i] := 第i个位置结尾最长递增子序列的长度
    // dp[i] = max(dp[j]+1), j<i, nums[j]<nums[i]

    const dp = Array(nums.length).fill(1);
    let ans = 1;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] >= nums[i]) continue;
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
        ans = Math.max(dp[i], ans);
    }
    return ans;
};
