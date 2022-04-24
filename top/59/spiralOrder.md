## 54. 螺旋矩阵
```
给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

 

示例 1：


输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
示例 2：


输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 

提示：

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
```

%

```js
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const m = matrix.length, n = matrix[0].length;
    const dirs = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ]

    let x = 0, y = -1;
    let di = 0;// 方向
    let ans = [];
    while (ans.length < m * n) {
        const [dx, dy] = dirs[di];
        x += dx;
        y += dy;
        if (x >= 0 && y >= 0 && x < m && y < n && matrix[x][y] !== Infinity) {
            ans.push(matrix[x][y]);
            matrix[x][y] = Infinity;
        } else {
            // go back one step
            x -= dx;
            y -= dy;
            di = (di + 1) % 4;
        }
    }
    return ans;
};
```