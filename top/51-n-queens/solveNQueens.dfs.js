/**
 * @param {number} n
 * @return {string[][]}
 */

var solveNQueens = function (n) {
    const TMP = '.'.repeat(n);
    let ans = [];
    dfs(0, [], [], []);
    // console.log(ans)
    return ans;

    function dfs(
        i, //当前皇后所在行
        downArr, // 向下的攻击 横坐标定值
        rightArr, // 向右的攻击 差定值
        leftArr // 向左的攻击 和定值
    ) {
        if (i === n) {
            ans.push(
                downArr.map((v) => {
                    return TMP.substr(0, v) + 'Q' + TMP.substr(v + 1);
                })
            );
            return;
        }

        for (let j = 0; j < n; j++) {
            if (
                canDown(downArr, i, j) &&
                canRight(rightArr, i, j) &&
                canLeft(leftArr, i, j)
            ) {
                // select
                downArr.push(j);
                rightArr.push(i - j);
                leftArr.push(i + j);
                // recrusion
                dfs(i + 1, downArr, rightArr, leftArr);
                // restore
                downArr.pop();
                rightArr.pop();
                leftArr.pop();
            }
        }
    }

    function canDown(arr, x, y) {
        for (let item of arr) {
            if (item === y) return false;
        }
        return true;
    }

    function canRight(arr, x, y) {
        for (let item of arr) {
            if (item === x - y) return false;
        }
        return true;
    }

    function canLeft(arr, x, y) {
        for (let item of arr) {
            if (item === x + y) return false;
        }
        return true;
    }
};
