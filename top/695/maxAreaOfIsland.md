## 695. 岛屿的最大面积
```
给你一个大小为 m x n 的二进制矩阵 grid 。

岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在 水平或者竖直的四个方向上 相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。

岛屿的面积是岛上值为 1 的单元格的数目。

计算并返回 grid 中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。

 

示例 1：


输入：grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
输出：6
解释：答案不应该是 11 ，因为岛屿只能包含水平或垂直这四个方向上的 1 。
示例 2：

输入：grid = [[0,0,0,0,0,0,0,0]]
输出：0
 

提示：

m == grid.length
n == grid[i].length
1 <= m, n <= 50
grid[i][j] 为 0 或 1
```

%

```js
class UnionSet {
    constructor(n) {
        this.fa = Array(n).fill().map((_, idx) => idx);
        this.size = Array(n).fill(1);
    }

    get(x) { return this.fa[x] = (this.fa[x] === x ? x : this.get(this.fa[x])) }

    merge(a, b) {
        const ra = this.get(a), rb = this.get(b);
        if (ra === rb) return; // 同一块区域
        this.size[rb] += this.size[ra];
        this.fa[ra] = rb;
    }
}
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    const m = grid.length, n = grid[0].length;

    const u = new UnionSet(m * n);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) continue;
            if (i - 1 >= 0 && grid[i - 1][j]) u.merge(idx(i - 1, j), idx(i, j));
            if (j - 1 >= 0 && grid[i][j - 1]) u.merge(idx(i, j), idx(i, j - 1));
        }
    }


    let ans = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) continue;
            if (u.get(idx(i, j)) === idx(i, j)) ans = Math.max(ans, u.size[idx(i, j)])
        }
    }

    return ans;

    function idx(i, j) {
        return i * n + j;// (m-1)n+n-1
    }
};
```