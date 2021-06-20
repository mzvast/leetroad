/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
    const m = matrix.length;
    const d = matrix;

    // dp[i][j] := minFSum(i,j)
    // dp[i][j] = min(dp[i-1][x-1],dp[i-1][x],dp[i-1][x+1]) + d[i][j]

    const f = [];
    for (let i = 0; i <= m; i++) {
        const cur = Array(m + 1).fill(+Infinity);
        f.push(cur);
    }

    for (let y = 0; y < m; y++) {
        for (let x = 0; x < m; x++) {
            f[y][x] = d[y][x];
            if (y === 0) continue;
            if (x === 0) {
                f[y][x] += Math.min(f[y - 1][x], f[y - 1][x + 1]);
            } else if (x === m - 1) {
                f[y][x] += Math.min(f[y - 1][x - 1], f[y - 1][x]);
            } else {
                f[y][x] += Math.min(
                    f[y - 1][x - 1],
                    f[y - 1][x],
                    f[y - 1][x + 1]
                );
            }
        }
    }

    return Math.min.apply(null, f[m - 1]);
};

// 无padding
