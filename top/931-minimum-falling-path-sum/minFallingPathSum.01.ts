/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
    const n = matrix.length;
    const d = matrix;

    // dp[i][j] := minFSum(i,j)
    // dp[i][j] = min(dp[i-1][x-1],dp[i-1][x],dp[i-1][x+1]) + d[i][j]

    // padding for left and right boundary
    const f = [];
    for (let i = 0; i <= n + 1; i++) {
        const cur = Array(n + 2).fill(+Infinity);
        f.push(cur);
    }

    for (let y = 1; y <= n; y++) {
        for (let x = 1; x <= n; x++) {
            f[y][x] = d[y - 1][x - 1];
            if (y === 1) continue;
            f[y][x] += Math.min(f[y - 1][x - 1], f[y - 1][x], f[y - 1][x + 1]);
        }
    }

    return Math.min.apply(null, f[n]);
};

// 有padding
