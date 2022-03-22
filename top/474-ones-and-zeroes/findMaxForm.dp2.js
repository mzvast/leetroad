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
    const dp = Array(m + 1)
        .fill()
        .map(() => Array(n + 1).fill(0));

    // base case
    // dp[0][..][..] = 0;
    // console.log(dp)

    for (let str of strs) {
        // const [dm, dn] = getDmDn(strs[i - 1]);
        let dm = (dn = 0);
        for (let x of str) {
            if (x === '0') dm += 1;
            else dn += 1;
        }
        // 倒着遍历
        for (let i = m; i >= dm; i--) {
            for (let j = n; j >= dn; j--) {
                dp[i][j] = Math.max(
                    dp[i][j], // 不放
                    1 + dp[i - dm][j - dn] //放
                );
            }
        }
    }

    return dp[m][n];
};
