/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var solve = function (board) {
    // 逆向，从外圈开始搜索相连的o标记，这些不能别填充
    const m = board.length,
        n = board[0].length;
    // const visitedMap = Array(m).fill().map(() => Array(n).fill(0));
    const dirs = [
        [0, +1],
        [0, -1],
        [+1, 0],
        [-1, 0],
    ];
    // 初始化q
    const q = [];
    // 搜索4条边上的O
    for (let i = 0; i < m; i++) {
        if (board[i][0] === 'O') dfs(i, 0);
        if (board[i][n - 1] === 'O') dfs(i, n - 1);
    }

    for (let j = 0; j < n; j++) {
        if (board[0][j] === 'O') dfs(0, j);
        if (board[m - 1][j] === 'O') dfs(m - 1, j);
    }

    // console.log(board);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O') board[i][j] = 'X';
            else if (board[i][j] === 'o') board[i][j] = 'O';
        }
    }

    return board;

    function dfs(i, j) {
        // visitedMap[i][j] = 1;
        board[i][j] = 'o';

        for (let dir of dirs) {
            const [x, y] = [i + dir[0], j + dir[1]];
            if (x < 0 || x >= m || y < 0 || y >= n) continue; // out
            // if (visitedMap[x][y]) continue;// visited
            if (board[x][y] === 'X' || board[x][y] === 'o') continue; // X or visited
            // found 'O', turn into 'o'
            dfs(x, y);
        }
    }
};
