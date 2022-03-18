/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    const sum = nums.slice(0); //prefix sum

    for (let i = 1; i < sum.length; i++) sum[i] += sum[i - 1];
    // dp[i] := 第i个数之前的最大区间和
    // dp[i] = sum[i] - min(sum[j]) ,0<=j<i
    let ans = -Infinity,
        pre_min = 0;
    for (x of sum) {
        ans = Math.max(ans, x - pre_min);
        pre_min = Math.min(pre_min, x);
    }
    return ans;
};
