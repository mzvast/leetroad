/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    // sum(A) -sum(B) = target
    // sum(A) = target+ sum(B)
    // sum(A) + sum(A) = target + sum(nums)
    // sum(A) = (target + sum(nums))/2
    // 0-1 背包问题

    let sum = 0;
    for (let num of nums) sum += num;

    if (sum < target || (target + sum) % 2 !== 0) return 0;

    return subsets(nums, (target + sum) / 2);

    function subsets(nums, sum) {
        // dp[i][j] := 前i个元素中选择，目标和为j的种数
        // dp[i][j] = dp[i-1][j]+ dp[i-1][j-nums[i-1]]
        // ans = dp[n][sum]
        const n = nums.length;

        const dp = Array(sum + 1).fill(0);

        dp[0] = 1;

        for (let i = 1; i <= n; i++) {
            for (let j = sum; j >= 0; j--) {
                if (j - nums[i - 1] < 0) {
                    dp[j] = dp[j];
                } else {
                    dp[j] = dp[j] + dp[j - nums[i - 1]];
                }
            }
        }
        return dp[sum];
        // return dp[n][sum];
    }
};
