/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    //
    const sum = nums.reduce((pre, cur) => pre + cur, 0);
    if (sum % 2 !== 0) return false;
    // 背包问题，选择n个数使得和为sum/2
    // dp[i][j] := 前i个数能否构成和为j
    // dp[i][j] = dp[i-1][j-num] for num in nums
    // ans = dp[n][sum/2]
    const n = nums.length;
    const dp = Array(sum + 1).fill(false);

    // base case dp[..][0]=true;
    dp[0] = true;

    // transition
    for (let i = 0; i < n; i++) {
        for (let j = sum; j >= 0; j--) {
            // 每个数字只能用一次，所以要从后往前避免结果被影响
            if (j - nums[i] >= 0) {
                dp[j] =
                    dp[j] || // 不装
                    dp[j - nums[i]]; // 装
            }
            if (dp[sum / 2]) return true;
        }
    }
    return false;
};
