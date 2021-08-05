/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function (arr) {
    // dp[i][j] := answer a[i]~a[j]
    // dp[i][j] = min{dp[i][k]+dp[k+1][j]+max(a[i~k]*max(a[k+1~j]))}, i<=k<j
    const n = arr.length;
    const dp = Array(n + 1)
        .fill(0)
        .map(() => Array(n + 1).fill(0));
    const m = Array(n + 1)
        .fill(0)
        .map(() => Array(n + 1).fill(0));

    // 预先计算max(a[i~k])
    for (let i = 0; i < n; i++) {
        m[i][i] = arr[i];
        for (let j = i + 1; j < n; j++) {
            m[i][j] = Math.max(m[i][j - 1], arr[j]);
        }
    }

    for (let l = 2; l <= n; l++) {
        for (let i = 0; i + l <= n; i++) {
            const j = i + l - 1;
            dp[i][j] = Infinity;
            for (let k = i; k < j; k++) {
                dp[i][j] = Math.min(
                    dp[i][j],
                    dp[i][k] + dp[k + 1][j] + m[i][k] * m[k + 1][j]
                );
            }
        }
    }

    console.log(dp);

    return dp[0][n - 1];
};
