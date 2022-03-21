/**
 * @param {number[][]} grid
 * @return {number}
 */
class Data {
    constructor(x, y, k) {
        this.x = x;
        this.y = y;
        this.k = k; // 路径经过的点数量
    }
}
var shortestPathBinaryMatrix = function (grid) {
    const m = grid.length,
        n = grid[0].length;
    const visited = Array(m)
        .fill(0)
        .map(() => Array(n).fill(0));
    const q = [];

    // init q
    if (grid[0][0] !== 0) return -1;
    visited[0][0] = 1;
    q.push(new Data(0, 0, 1));

    // dirs 8
    const dirs = [
        [-1, 1],
        [-1, 0],
        [-1, -1],

        [0, 1],
        [0, -1],

        [1, 1],
        [1, 0],
        [1, -1],
    ];
    // bfs

    while (q.length) {
        const cur = q.shift();
        if (cur.x === m - 1 && cur.y === n - 1) return cur.k; // bingo

        for (let dir of dirs) {
            const [x, y] = [cur.x + dir[0], cur.y + dir[1]];
            if (x < 0 || x >= m || y < 0 || y >= n) continue; // out of bound
            if (grid[x][y] === 1) continue; // hit 1
            if (visited[x][y]) continue; // visited
            visited[x][y] = 1;
            q.push(new Data(x, y, cur.k + 1));
        }
    }

    return -1;
};
