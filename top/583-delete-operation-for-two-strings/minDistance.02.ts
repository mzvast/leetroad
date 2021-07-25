/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    // dp[i][j] := word1[0..i] to word2[0..j] 的最小操作距离
    // dp[i][j] =
    // ans = dp[len1][len2]

    const len1 = word1.length,
        len2 = word2.length;

    const dp = Array(len1 + 1)
        .fill(0)
        .map(() => Array(len2 + 1).fill(0));

    // base case
    // dp[0][..] =
    for (let j = 1; j <= len2; j++) {
        dp[0][j] = j;
    }
    // dp[..][0] =
    for (let i = 1; i <= len1; i++) {
        dp[i][0] = i;
    }

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]; // skip
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
            }
        }
    }

    return dp[len1][len2];
};
