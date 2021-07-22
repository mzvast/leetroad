/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    // dp[i][j] := edit distance between word1[0..i] and word2[0..j]
    // ans = dp[len1][len2]
    const len1 = word1.length,
        len2 = word2.length;
    const dp = Array(len1 + 1)
        .fill(0)
        .map(() => Array(len2 + 1).fill(0));
    // base case
    // dp[..][0]
    for (let i = 1; i <= len1; i++) {
        dp[i][0] = i;
    }
    // dp[0][..]
    for (let j = 1; j <= len2; j++) {
        dp[0][j] = j;
    }
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                // skip
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] =
                    1 +
                    Math.min(
                        dp[i][j - 1], // add
                        dp[i - 1][j], // delete
                        dp[i - 1][j - 1] // replace
                    );
            }
        }
    }

    return dp[len1][len2];
};
