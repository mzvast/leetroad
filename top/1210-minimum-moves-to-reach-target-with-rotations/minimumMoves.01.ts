/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function (grid) {
    // dp[i][j][0] := 尾巴移动到(i,j)并且头部向右的的最少步数
    // dp[i][j][1] := 尾巴移动到(i,j)并且头部向下的的最少步数
    // dp[i][j] = 根据障碍物情况分类计算
    // ans = dp[m][n-1]

    const m = grid.length,
        n = grid[0].length;
    const dp = Array(m + 1)
        .fill(0)
        .map(() =>
            Array(n + 1)
                .fill(0)
                .map(() => Array(2).fill(Infinity))
        );

    // base case
    // dp[..][0][0/1] =0
    // dp[0][..][0/1] =0
    // padding
    dp[0][1][0] = -1;
    dp[1][0][0] = -1;
    //=> dp[1][1][0] = 0;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            let v = false,
                h = false;
            if (!isEmpty(i, j)) continue;

            if (isEmpty(i, j + 1)) {
                //平移
                dp[i][j][0] = Math.min(
                    1 + dp[i][j - 1][0], // 向右
                    1 + dp[i - 1][j][0]
                ); // 向下
                h = true;
            }

            if (isEmpty(i + 1, j)) {
                dp[i][j][1] = Math.min(
                    1 + dp[i][j - 1][1], // 向右
                    1 + dp[i - 1][j][1]
                ); // 向下
                v = true;
            }

            // 转90度
            if (
                isEmpty(i, j + 1) &&
                isEmpty(i + 1, j + 1) &&
                isEmpty(i + 1, j)
            ) {
                if (h) {
                    dp[i][j][1] = Math.min(
                        dp[i][j][1],
                        dp[i][j][0] + 1
                        // 1 + dp[i][j - 1][1],
                        // 1 + dp[i - 1][j][1]
                    );
                }
                if (v) {
                    dp[i][j][0] = Math.min(
                        dp[i][j][0],
                        dp[i][j][1] + 1
                        // 1 + dp[i][j - 1][0],
                        // 1 + dp[i - 1][j][0]
                    );
                }
            }
        }
    }
    // console.log(dp[1][3][0]);

    return Number.isFinite(dp[m][n - 1][0]) ? dp[m][n - 1][0] : -1;

    function isEmpty(i, j) {
        if (i < 1 || i > m || j < 1 || j > n) return false;
        return grid[i - 1][j - 1] === 0;
    }
};
