/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
    // dp[i] := max sum of (A[i]~ A[i])
    // A[1],...,A[i-k],A[i-k+1],...,A[i]
    // dp[i] 取以下的最大值
    // dp[i] = dp[i-1] + A[i]
    // dp[i] = dp[i-2] + max(A[i-1~i])*2
    // ...
    // dp[i] = dp[i-k] + max(A[i-k+1~i)*k
    // 因此
    // dp[i] = max{dp[i-j] + j*max(A[i-j+1~i])}, 1<=j<=min(i,k)
    // ans = dp[n]
    const n = arr.length;
    const dp = Array(n + 1).fill(0);

    // base case
    dp[0] = 0;

    // i => 第i个数, 1~n
    for (let i = 1; i <= n; i++) {
        let m = -Infinity;
        for (let j = 1; j <= Math.min(i, k); j++) {
            m = Math.max(m, arr[i - j]);
            dp[i] = Math.max(dp[i], dp[i - j] + j * m);
        }
    }

    return dp[n];
};
