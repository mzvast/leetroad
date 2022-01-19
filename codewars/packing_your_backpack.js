// https://www.codewars.com/kata/5a51717fa7ca4d133f001fdf
const scores = [15, 10, 9, 5];
const weights = [1, 5, 3, 4];
const capacity = 8;
function packBagpack(scores, weights, capacity) {
    // dp[i][j] := 前i个物品，当前占用空间j，最大价值
    // dp[i][j] = max(dp[i-1][j],
    //			dp[i-1][j-weights[i-1]]+scores[i-1]
    // )

    // 0<=i<=n
    // 0<=j<=capacity
    const n = scores.length;

    const dp = Array(n + 1)
        .fill(0)
        .map(() => Array(capacity + 1).fill(0));

    // base case
    // dp[0][..] = 0, dp[..][0] = 0

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= capacity; j++) {
            if (j - weights[i - 1] < 0) {
                // 装不下
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = Math.max(
                    dp[i - 1][j],
                    dp[i - 1][j - weights[i - 1]] + scores[i - 1]
                );
            }
        }
    }

    return dp[n][capacity];
}

// console.log(packBagpack(scores, weights, capacity));
