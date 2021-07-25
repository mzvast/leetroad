/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    // dp[i][j] := lcs text1[0..i] and text2[0..j]
    // dp[i][j] =
    // ans = dp[len1][len2]

    const len1 = text1.length,
        len2 = text2.length;
    const dp = Array(len1 + 1)
        .fill(0)
        .map(() => Array(len2 + 1).fill(0));

    // base case
    // dp[..][0]
    // dp[0][..]

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                // skip
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                // delete
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[len1][len2];
};
