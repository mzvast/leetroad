## 200. 岛屿数量
```
给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。

 

示例 1：

输入：grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
输出：1
示例 2：

输入：grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
输出：3
 

提示：

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] 的值为 '0' 或 '1'
```
%
```js
/**
 * @param {character[][]} grid
 * @return {number}
 */
class UnionSet {
    constructor(n) {
        this.fa = Array(n)
            .fill()
            .map((_, idx) => idx);
    }

    get(x) {
        if (this.fa[x] === x) return x;
        const rx = this.get(this.fa[x]);
        this.fa[x] = rx; // 路径压缩
        return rx;
    }

    merge(a, b) {
        const ra = this.get(a);
        const rb = this.get(b);
        this.fa[ra] = rb;
    }
}
var numIslands = function (grid) {
    const m = grid.length,
        n = grid[0].length;
    const u = new UnionSet(m * n);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '0') continue;
            // 判断上面和左边是否连通
            if (i - 1 >= 0 && grid[i - 1][j] === '1')
                u.merge(ind(i, j), ind(i - 1, j));
            if (j - 1 >= 0 && grid[i][j - 1] === '1')
                u.merge(ind(i, j), ind(i, j - 1));
        }
    }

    let ans = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1' && u.fa[ind(i, j)] === ind(i, j)) ans += 1;
        }
    }

    return ans;

    function ind(i, j) {
        return i * n + j;
    }
};
```