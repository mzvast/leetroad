/**
 * @param {number[]} values
 * @return {number}
 */
var minScoreTriangulation = function (values) {
    // dp[i][j] := 三角化i..j的最小得分
    // base case
    // dp[i][j] = j-i<=1?0:Infinity
    // dp[i][j] = min{dp[i][k]+dp[k][j]+ A[i]*A[k]*A[j]}, i<k<j
    // ans = dp[0][n-1]

    const A = values,
        len = A.length;
    const dp = Array(len + 1)
        .fill(0)
        .map(() => Array(len + 1).fill(0));

    for (let l = 3; l <= len; l++) {
        for (let i = 0; i + l <= len; i++) {
            const j = i + l - 1;
            dp[i][j] = Infinity;
            for (let k = i + 1; k < j; k++) {
                dp[i][j] = Math.min(
                    dp[i][j],
                    dp[i][k] + dp[k][j] + A[i] * A[k] * A[j]
                );
            }
        }
    }

    return dp[0][len - 1];
};
