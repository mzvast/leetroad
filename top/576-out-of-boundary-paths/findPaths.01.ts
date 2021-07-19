/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function (m, n, maxMove, startRow, startColumn) {
    // dp[k][i][j] := 移动k次后在(i,j)的路径数量
    /**
	dp[k][i][j] = dp[k-1][i+1][j] 
		    + dp[k-1][i-1][j] 
		    + dp[k-1][i][j+1] 
		    + dp[k-1][i][j-1]
		    // 且前一个在界内
		    // i+1<=m,i-1>=1
		    // j+1<=n,j-1>=0
	 */
    // ans = sum([0,1..n])+sum([m+1,1..n])
    //      +sum([1..m,0]) + sum([1..m,n+1]) , for k in range(maxMove)

    const dp = Array(maxMove + 1)
        .fill(0)
        .map(() =>
            Array(m + 2)
                .fill(0)
                .map(() => Array(n + 2).fill(0))
        );

    // base case
    dp[0][startRow + 1][startColumn + 1] = 1;

    for (let k = 1; k <= maxMove; k++) {
        for (let i = 0; i <= m + 1; i++) {
            for (let j = 0; j <= n + 1; j++) {
                if (
                    (i === 0 && j === 0) ||
                    (i === m + 1 && j === 0) ||
                    (i === m + 1 && j === n + 1) ||
                    (i === 0 && j === n + 1)
                ) {
                    continue;
                }

                if (isInArea(i + 1, j)) {
                    dp[k][i][j] = mod(dp[k][i][j] + dp[k - 1][i + 1][j]);
                }
                if (isInArea(i - 1, j)) {
                    dp[k][i][j] = mod(dp[k][i][j] + dp[k - 1][i - 1][j]);
                }
                if (isInArea(i, j + 1)) {
                    dp[k][i][j] = mod(dp[k][i][j] + dp[k - 1][i][j + 1]);
                }
                if (isInArea(i, j - 1)) {
                    dp[k][i][j] = mod(dp[k][i][j] + dp[k - 1][i][j - 1]);
                }
            }
        }
    }

    // ans
    let ans = 0;

    for (let k = 1; k <= maxMove; k++) {
        for (let i = 1; i <= m; i++) {
            ans = mod(ans + dp[k][i][0]);
            ans = mod(ans + dp[k][i][n + 1]);
        }
        for (let j = 1; j <= n; j++) {
            ans = mod(ans + dp[k][0][j]);
            ans = mod(ans + dp[k][m + 1][j]);
        }
    }

    return ans;

    function mod(x) {
        return x % (1e9 + 7);
    }

    function isInArea(i, j) {
        return i <= m && i >= 1 && j <= n && j >= 1;
    }
};
