/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function (grid) {
    const m = grid.length,
        n = grid[0].length;

    const memo = [];
    for (let i = 0; i <= m; i++) {
        const row = Array(m).fill(0);
        memo.push(row);
    }

    return minSum(m, n, grid);

    function minSum(x, y, o) {
        // console.log('minSum', x, y)
        if (x <= 0 || y <= 0) return +Infinity;
        if (x === 1 && y === 1) return o[0][0];
        if (memo[x][y] > 0) return memo[x][y];
        const ans = Math.min(
            minSum(x - 1, y, o),
            minSum(x, y - 1, o))
            + o[x - 1][y - 1];
        memo[x][y] = ans;
        // console.log(x, y, 'return', ans);
        return memo[x][y];
    }

};