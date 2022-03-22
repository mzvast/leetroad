/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
    // 01背包
    // dp[i][m][n] := 前i个元素选择后，背包容量为m个0和n个1，所能装的最大字符串数量
    // dp[i][m][n] = max(dp[i - 1][j][k],dp[i - 1][j - dm][k - dn]) 放或不放
    const dp = Array(strs.length + 1)
        .fill()
        .map(() =>
            Array(m + 1)
                .fill()
                .map(() => Array(n + 1).fill(0))
        );

    // base case
    // dp[0][..][..] = 0;
    // console.log(dp)

    for (let i = 1; i <= strs.length; i++) {
        const [dm, dn] = getDmDn(strs[i - 1]);
        for (let j = 0; j <= m; j++) {
            for (let k = 0; k <= n; k++) {
                dp[i][j][k] = Math.max(
                    dp[i - 1][j][k], // 不放
                    j >= dm && k >= dn
                        ? 1 + dp[i - 1][j - dm][k - dn]
                        : -Infinity //放
                );
            }
        }
    }

    return dp[strs.length][m][n];

    function getDmDn(str) {
        let a = (b = 0);
        for (let x of str) {
            if (x === '0') a += 1;
            if (x === '1') b += 1;
        }
        return [a, b];
    }
};
