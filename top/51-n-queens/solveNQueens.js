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
