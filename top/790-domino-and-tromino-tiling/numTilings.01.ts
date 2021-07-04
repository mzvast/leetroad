/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
    // dp[i][0] := 正好放平第i列的数量
    // dp[i][1] := 上面凸起到第i列的数量
    // dp[i][2] := 下面凸起到第i列的数量

    let dp = [];
    for (let i = 0; i <= n; i++) {
        let cur = Array(3).fill(0);
        dp.push(cur);
    }

    const kMod = Math.pow(10, 9) + 7;

    // base case
    dp[0][0] = dp[1][0] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i][0] =
            (dp[i - 1][0] + dp[i - 2][0] + dp[i - 1][1] + dp[i - 1][2]) % kMod;
        dp[i][1] = (dp[i - 2][0] + dp[i - 1][2]) % kMod;
        dp[i][2] = (dp[i - 2][0] + dp[i - 1][1]) % kMod;
    }

    return dp[n][0];
};
