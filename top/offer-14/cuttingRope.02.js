/**
 * @param {number} n
 * @return {number}
 */
 var cuttingRope = function (n) {
    // dp[i] := 到i的最大乘积
    // dp[i] = max(dp[i],max((i-j)*j, j*dp[i-j]))

    const dp = Array(n + 1).fill(0);
    dp[2] = 1;

    for (let i = 3; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            dp[i] = max(dp[i], max(BigInt((i - j) * j), BigInt(BigInt(j) * BigInt(dp[i - j]))));
        }
    }

    return mod(dp[n]);

    function mod(x) {
        return Number(BigInt(x) % BigInt(1e9 + 7))
    }

    function max(a, b) {
        return a > b ? a : b;
    }
};