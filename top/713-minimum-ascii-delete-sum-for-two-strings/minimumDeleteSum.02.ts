/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
    // dp[i][j] := min charCode sum from s1[0..i] t s2[0..j]
    // ans = dp[len1][len2]

    const len1 = s1.length,
        len2 = s2.length;
    const dp = Array(len1 + 1)
        .fill(0)
        .map(() => Array(len2 + 1).fill(0));

    // base case
    // dp[0][..]
    for (let j = 1; j <= len2; j++) {
        dp[0][j] = dp[0][j - 1] + s2.charCodeAt(j - 1);
    }
    // dp[..][]
    for (let i = 1; i <= len1; i++) {
        dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1);
    }

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                // skip
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                // console.log(i, j, s1[i - 1], s2[j - 1])
                // delete
                dp[i][j] = Math.min(
                    dp[i - 1][j] + s1.charCodeAt(i - 1),
                    dp[i][j - 1] + s2.charCodeAt(j - 1)
                );
            }
        }
    }

    // console.log(dp);

    return dp[len1][len2];
};
