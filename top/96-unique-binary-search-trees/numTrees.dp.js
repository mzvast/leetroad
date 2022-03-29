/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    // dp[i] := i个节点组成的不同BST个数
    // dp[i] = f(1)+...f(i)
    // f(j) = dp[j-1]*dp[i-j]

    const dp = Array(n + 1).fill(0);

    // base case
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] += dp[j - 1] * dp[i - j];
        }
    }

    return dp[n];
};
