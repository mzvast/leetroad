## 221. 最大正方形
```
在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。

 

示例 1：


输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
输出：4
示例 2：


输入：matrix = [["0","1"],["1","0"]]
输出：1
示例 3：

输入：matrix = [["0"]]
输出：0
 

提示：

m == matrix.length
n == matrix[i].length
1 <= m, n <= 300
matrix[i][j] 为 '0' 或 '1'
```
%
```js
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    // sum[i][j] := matrix[0:i-1][0:j-1] 的和
    // sum[i][j] = matrix[i-1][j-1]+ sum[i][j-1]+sum[i-1][j]- sum[i-1][j-1]

    const m = matrix.length,
        n = matrix[0].length;

    // 前缀和
    const sum = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            sum[i][j] =
                Number(matrix[i - 1][j - 1])
                + sum[i][j - 1]
                + sum[i - 1][j]
                - sum[i - 1][j - 1];
        }
    }

    let ans = 0;
    // i,j作为左上角
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            for (let k = Math.min(m - i + 1, n - j + 1); k >= 0; k--) {
                // 右下角顶点坐标 i+k-1,j+k-1
                const s = sum[i + k - 1][j + k - 1]
                    - sum[i + k - 1][j - 1]
                    - sum[i - 1][j + k - 1]
                    + sum[i - 1][j - 1];
                if (s === k * k) {
                    ans = Math.max(ans, s);
                    break;
                }
            }
        }
    }

    return ans;
};
```