/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    //
    const sum = nums.reduce((pre, cur) => pre + cur, 0);
    if (sum % 2 !== 0) return false;
    const dp = Array(sum + 1).fill(0);
    // dp[i][j] := 能否用前i个数相加得到j
    // dp[i][j] = true if dp[i-1][j-nums[i]]
    // =>
    //  dp[j] = true if dp[j-num] for num in nums
    dp[0] = 1; // base case
    for (let num of nums) {
        for (let i = sum; i >= 0; i--) {
            if (dp[i]) dp[i + num] = 1;
            if (dp[sum / 2]) return true;
        }
    }
    return false;
};
