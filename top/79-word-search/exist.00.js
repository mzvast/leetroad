/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let ans = false;

    const n = word.length;

    const visitedSet = new Set();

    // 找到起始点

    let startPoint = []; // 起始点可能有多个
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) {
                startPoint.push([i, j]);
            }
        }
    }

    if (startPoint.length === 0) return false; // 没有起始点

    // 对于每一个起始点，分别计算，有一个可以就可以

    for (let i = 0; i < startPoint.length; i++) {
        visitedSet.clear(); // 每一轮循环要重置
        visitedSet.add(encodeCord(startPoint[i][0], startPoint[i][1])); // 加入起始点
        // console.log(startPoint[i]);
        bt(visitedSet, startPoint[i], 1);
        if (ans) break; // 找到了就提前退出
    }

    return ans;

    function bt(path, curCord, idx) {
        // console.log(path);
        if (path.size === n) {
            ans = true;
            return;
        }

        const options = [
            [curCord[0] - 1, curCord[1]], // 上
            [curCord[0] + 1, curCord[1]], // 下
            [curCord[0], curCord[1] - 1], // 左
            [curCord[0], curCord[1] + 1], // 右
        ];
        for (let next of options) {
            const [i, j] = next;
            if (
                isInArea(i, j) &&
                !isVisited(i, j) &&
                getLetter(i, j) === word[idx]
            ) {
                const key = encodeCord(i, j);
                path.add(key);
                bt(path, next, idx + 1);
                path.delete(key);
            }
        }
    }

    function encodeCord(i, j) {
        // console.log(cord);
        return i + ',' + j;
    }

    function decodeCord(str) {
        return str.split(',');
    }

    function isVisited(i, j) {
        const key = encodeCord(i, j);
        return visitedSet.has(key);
    }

    function isInArea(i, j) {
        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) {
            return false;
        }
        return true;
    }

    function getLetter(i, j) {
        return board[i][j];
    }
};
