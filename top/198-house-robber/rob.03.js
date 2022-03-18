/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    // dp[i][j] := 对于第i家偷或者不偷(j=0 or 1)的最大收益

    const dp = Array(nums.length)
        .fill(0)
        .map(() => Array(2).fill(0));

    // base case

    dp[0][0] = 0;
    dp[0][1] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // 不偷
        dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][0]);

        // 偷
        dp[i][1] = nums[i] + Math.max(dp[i - 1][0]);
    }

    return Math.max(...dp[nums.length - 1]);
};
