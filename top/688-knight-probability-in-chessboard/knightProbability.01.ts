/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function (n, k, row, column) {
    // dp[k][i][j] := 走了k步之后停在i,j格子上的走法总数
    // dp[k][i][j] = sum(dp[k-1][x][j])  从x,y可以走到i,j

    const dp = Array(k + 1)
        .fill(0)
        .map(() =>
            Array(n)
                .fill(0)
                .map(() => Array(n).fill(0))
        );

    // base case
    dp[0][row][column] = 1;

    const ops = [
        {x: 1, y: 2},
        {x: 2, y: 1},
        {x: 2, y: -1},
        {x: 1, y: -2},
        {x: -1, y: -2},
        {x: -2, y: -1},
        {x: -2, y: 1},
        {x: -1, y: 2},
    ];

    for (let t = 1; t <= k; t++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                // dp[t][i][j] =
                for (let op of ops) {
                    if (isInArea(i - op.x, j - op.y)) {
                        dp[t][i][j] += dp[t - 1][i - op.x][j - op.y];
                    }
                }
            }
        }
    }

    let sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            sum += dp[k][i][j];
        }
    }

    return sum / Math.pow(8, k);

    function isInArea(r, c) {
        return r >= 0 && r < n && c >= 0 && c < n;
    }
};
