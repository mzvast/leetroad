/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

class Data {
    constructor(x, y, k) {
        this.x = x; // 行
        this.y = y; // 列
        this.k = k; // 离开0的距离
    }
}

var updateMatrix = function (mat) {
    const m = mat.length, // 行
        n = mat[0].length; // 列
    // bfs
    const q = []; // Data queue
    const visited = Array(m)
        .fill(0)
        .map(() => Array(n).fill(-1)); // m*n 存距离,-1没访问过

    const dirs = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ]; // 方向数组
    init_queue();

    while (q.length) {
        const cur = q.shift();
        for (let dir of dirs) {
            const [x, y] = [cur.x + dir[0], cur.y + dir[1]]; // 新坐标

            // 验证合法性
            if (x < 0 || x >= m || y < 0 || y >= n) continue; //越界

            if (visited[x][y] !== -1) continue; // 访问过了

            visited[x][y] = cur.k + 1;
            q.push(new Data(x, y, cur.k + 1));
        }
    }

    return visited;

    function init_queue() {
        // 扫描mat，把所有的0添加进队列
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (mat[i][j]) continue;
                q.push(new Data(i, j, 0));
                visited[i][j] = 0;
            }
        }
    }
};
