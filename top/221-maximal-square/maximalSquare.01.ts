/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    const m = matrix.length,
        n = matrix[0].length;

    // dp[y][x] := sum(0:x, 0:y)
    // dp[y][x] = dp[y][x-1] + dp[y][x-1] - dp[y-1][x-1] + matrix[y][x]

    const sums = [];

    for (let y = 0; y <= m; y++) {
        const cur = Array(n + 1).fill(0);
        sums.push(cur);
    }

    // y,x>=1, padding = 1，这样basecase就cover了

    for (let y = 1; y <= m; y++) {
        for (let x = 1; x <= n; x++) {
            sums[y][x] =
                Number(matrix[y - 1][x - 1]) +
                sums[y - 1][x] +
                sums[y][x - 1] -
                sums[y - 1][x - 1];
        }
    }

    // console.log(sums)

    let ans = 0;
    for (let y = 1; y <= m; y++) {
        for (let x = 1; x <= n; x++) {
            for (let k = Math.min(m - y + 1, n - x + 1); k > 0; k--) {
                // check
                const sum =
                    sums[y + k - 1][x + k - 1] -
                    sums[y - 1][x + k - 1] -
                    sums[y + k - 1][x - 1] +
                    sums[y - 1][x - 1];
                if (sum === k * k) {
                    ans = Math.max(ans, sum);
                    break;
                }
            }
        }
    }
    return ans;
};
