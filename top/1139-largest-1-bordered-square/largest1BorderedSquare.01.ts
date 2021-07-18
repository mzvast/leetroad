/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function (grid) {
    // dp[i][j] := 从(0,0) 到(i,j)的面积
    // dp[i][j] = dp[i][j-1] + dp[i-1][j] -dp[i-1][j-1]+grid[i][j]
    // 四条边的面积等于长度即正方形存在
    // ans = max(len*len)

    const m = grid.length,
        n = grid[0].length;
    const dp = Array(m + 1)
        .fill(0)
        .map(() => Array(n + 1).fill(0));

    // base case
    // dp[0][..] = 0
    // dp[..][0] = 0

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] =
                dp[i][j - 1] +
                dp[i - 1][j] -
                dp[i - 1][j - 1] +
                grid[i - 1][j - 1];
        }
    }

    let ans = 0;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            for (let k = Math.min(m - i + 1, n - j + 1); k > 0; k--) {
                // 左上 (i,j)    右上 (i,j+k-1)
                // 左下 (i+k-1,j) 右下 (i+k-1,j+k-1)
                if (
                    getArea(i, j, i, j + k - 1) === k &&
                    getArea(i, j + k - 1, i + k - 1, j + k - 1) === k &&
                    getArea(i + k - 1, j, i + k - 1, j + k - 1) === k &&
                    getArea(i, j, i + k - 1, j) === k
                ) {
                    ans = Math.max(ans, k * k);
                    break;
                }
            }
        }
    }
    return ans;

    function getArea(x1, y1, x2, y2) {
        // 纵坐标x向下
        // 左上，右下
        return (
            dp[x2][y2] - dp[x2][y1 - 1] - dp[x1 - 1][y2] + dp[x1 - 1][y1 - 1]
        );
    }
};
