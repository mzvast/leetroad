## 51. N 皇后
```
n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。

每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

 

示例 1：


输入：n = 4
输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
解释：如上图所示，4 皇后问题存在两个不同的解法。
示例 2：

输入：n = 1
输出：[["Q"]]
 

提示：

1 <= n <= 9
```
%
```js
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    // 行，列，左下，右下 4种攻击方向

    // 每行放一个，那么只有列，左下，右下 3种攻击方向

    const ans = [];
    const TMP = '.'.repeat(n);

    dfs(0, [], [], [], []);

    return ans;

    function dfs(rowIdx, colArr, leftArr, rightArr) {
        if (rowIdx === n) {
            ans.push(colArr.map((idx) => getNQString(idx)));
            return;
        }

        for (let i = 0; i < n; i++) {
            if (isValid(rowIdx, i, colArr, leftArr, rightArr)) {
                colArr.push(i);
                leftArr.push(rowIdx + i);
                rightArr.push(rowIdx - i);

                dfs(rowIdx + 1, colArr, leftArr, rightArr);

                colArr.pop();
                leftArr.pop();
                rightArr.pop();
            }
        }
    }

    function isValid(rowIdx, colIdx, colArr, leftArr, rightArr) {
        for (let x of colArr) {
            if (colIdx === x) return false;
        }

        for (let x of leftArr) {
            if (rowIdx + colIdx === x) return false;
        }

        for (let x of rightArr) {
            if (rowIdx - colIdx === x) return false;
        }

        return true;
    }

    function getNQString(i) {
        return TMP.slice(0, i) + 'Q' + TMP.slice(i + 1);
    }
};
```