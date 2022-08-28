## 417. 太平洋大西洋水流问题
```
有一个 m × n 的矩形岛屿，与 太平洋 和 大西洋 相邻。 “太平洋” 处于大陆的左边界和上边界，而 “大西洋” 处于大陆的右边界和下边界。

这个岛被分割成一个由若干方形单元格组成的网格。给定一个 m x n 的整数矩阵 heights ， heights[r][c] 表示坐标 (r, c) 上单元格 高于海平面的高度 。

岛上雨水较多，如果相邻单元格的高度 小于或等于 当前单元格的高度，雨水可以直接向北、南、东、西流向相邻单元格。水可以从海洋附近的任何单元格流入海洋。

返回网格坐标 result 的 2D 列表 ，其中 result[i] = [ri, ci] 表示雨水从单元格 (ri, ci) 流动 既可流向太平洋也可流向大西洋 。

 

示例 1：



输入: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
输出: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
示例 2：

输入: heights = [[2,1],[1,2]]
输出: [[0,0],[0,1],[1,0],[1,1]]
 

提示：

m == heights.length
n == heights[r].length
1 <= m, n <= 200
0 <= heights[r][c] <= 105
```

%

```js
// dfs
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    // 从上到下，从左往右，标记可以走到的格子pacVisited
    // 从右往左，从下往上，标记可以走到的格子altVisited
    // 同时属于pacVisited和altVisited的就是ans

    const m = heights.length,
        n = heights[0].length;

    const pacVisited = Array(m).fill().map(() => Array(n).fill(false));
    const atlVisited = Array(m).fill().map(() => Array(n).fill(false));

    for (let i = 0; i < m; i++) {
        dfs(i, 0, heights[i][0], pacVisited);
        dfs(i, n - 1, heights[i][n - 1], atlVisited);
    }

    for (let j = 0; j < n; j++) {
        dfs(0, j, heights[0][j], pacVisited);
        dfs(m - 1, j, heights[m - 1][j], atlVisited);
    }

    let ans = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacVisited[i][j] && atlVisited[i][j]) ans.push([i, j]);
        }
    }

    return ans;

    function dfs(i, j, preHeight, visited) {
        if (i < 0 || i >= m || j < 0 || j >= n) return;
        if (visited[i][j]) return;
        if (heights[i][j] < preHeight) return;
        visited[i][j] = true;

        dfs(i + 1, j, heights[i][j], visited);
        dfs(i - 1, j, heights[i][j], visited);
        dfs(i, j + 1, heights[i][j], visited);
        dfs(i, j - 1, heights[i][j], visited);
    }
};
```