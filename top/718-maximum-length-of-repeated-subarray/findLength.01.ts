/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
    // dp[i][j] := fl nums1[0..i] and nums2[0..j] 以ij结尾往前的最大长度
    // dp[i][j] = 1+ dp[i-1][j-1] if nums1[i-1] === nums2[j-1] else 0
    // ans = max{dp[i][j]}

    const len1 = nums1.length,
        len2 = nums2.length;

    const dp = Array(len1 + 1)
        .fill(0)
        .map(() => Array(len2 + 1).fill(0));

    // base case
    // dp[..][0]
    // dp[0][..]
    let ans = 0;
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                // skip
                dp[i][j] = 1 + dp[i - 1][j - 1];
                ans = Math.max(ans, dp[i][j]);
            }
        }
    }
    // console.log(dp);

    return ans;
};
