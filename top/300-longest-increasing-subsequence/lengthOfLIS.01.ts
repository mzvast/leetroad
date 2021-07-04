/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    // dp[i] := max LoL end with i
    // dp[i] = max{dp[j]+1}, 0<=j<i<n, nums[j]<nums[i]
    const n = nums.length;
    let dp = Array(n + 1).fill(1); // 最小值是1

    // base case

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] >= nums[i]) continue;
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
    // console.log(dp);
    return Math.max.apply(null, dp);
};
