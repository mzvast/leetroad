/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */


 var uniquePaths = function (m, n) {
    let f = Array(m + 1).fill(Array(n + 1).fill(0));
    f[1][1] = 1;
    for (let y = 1; y <= m; y++) {
        for (let x = 1; x <= n; x++) {
            if (x === 1 && y === 1) {
                continue;
            } else {
                f[y][x] = f[y - 1][x] + f[y][x - 1];
            }
        }
    }
    return f[m][n]
};