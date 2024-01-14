function longestCommonSubstring(a, b) {
    // dp[i][j] := a的前i个字母和b的前j个字母的LCS
    // dp[i][j] = dp[i-1][j-1]+1 if a[i-1]===b[j-1]
    //       else= 0
    // ans = max{dp[i][j]}

    const m = a.length,
        n = b.length,
        dp = Array.from({length: m + 1}, () => Array(n + 1).fill(0));

    let ans = 0;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (a[i - 1] === b[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
            else dp[i][j] = 0;

            ans = Math.max(ans, dp[i][j]);
        }
    }


    return ans;
}

console.log(longestCommonSubstring('ABCD', 'CBCE'));
