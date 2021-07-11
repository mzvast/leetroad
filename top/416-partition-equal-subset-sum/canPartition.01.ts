/**
 * @param {number[]} nums
 * @return {boolean}
 */
//@ts-ignore
var canPartition = function (nums) {
    //
    const sum = nums.reduce((pre, cur) => pre + cur, 0);
    if (sum % 2 !== 0) return false;
    // 背包问题，选择n个数使得和为sum/2
    // dp[i][j] := 前i个数能否构成和为j
    // dp[i][j] = dp[i-1][j-num] for num in nums
    // ans = dp[n][sum/2]
    const n = nums.length;
    const dp = [];

    for (let i = 0; i <= n; i++) {
        const cur = Array(sum + 1).fill(false);
        dp.push(cur);
    }

    // base case dp[..][0]=true;
    for (let i = 0; i <= n; i++) {
        dp[i][0] = true;
    }

    // transition
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= sum / 2; j++) {
            if (j - nums[i - 1] < 0) {
                dp[i][j] = dp[i - 1][j]; // 不装
            } else {
                dp[i][j] =
                    dp[i - 1][j] || // 不装
                    dp[i - 1][j - nums[i - 1]]; // 装
            }
        }
    }

    return dp[n][sum / 2];
};
