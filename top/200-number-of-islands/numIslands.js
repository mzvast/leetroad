/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const m = grid.length,
        n = grid[0].length;

    // 移动方向
    const dirs = [
        [-1, 0],
        [+1, 0],
        [0, -1],
        [0, +1],
    ];

    let ans = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '0') continue;
            ans += 1;
            dfs(i, j);
        }
    }

    return ans;

    // 相邻的1变成0
    function dfs(i, j) {
        if (grid[i][j] === '0') return;
        grid[i][j] = '0';

        for (let dir of dirs) {
            const [x, y] = [i + dir[0], j + dir[1]];
            // 排除掉不合法的点

            if (x < 0 || x >= m || y < 0 || y >= n) continue;

            dfs(x, y);
        }
    }
};
