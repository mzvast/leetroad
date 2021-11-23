/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let ans = false;

    const n = word.length;
    const options = [
        [-1, 0],
        [+1, 0],
        [0, +1],
        [0, -1],
    ];
    const visitedBoard = Array(board.length)
        .fill(0)
        .map(() => Array(board[0].length).fill(false));

    function resetVisited() {
        for (let i = 0; i < visitedBoard.length; i++) {
            for (let j = 0; j < visitedBoard[0].length; j++) {
                visitedBoard[i][j] = false;
            }
        }
    }

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
        const [x, y] = startPoint[i];
        visitedBoard[x][y] = true;
        bt(startPoint[i][0], startPoint[i][1], 1);
        if (ans) break; // 找到了就提前退出
        resetVisited();
    }

    return ans;

    function bt(row, col, idx) {
        // console.log('enter::',curCord);
        if (idx === n) {
            ans = true;
            return;
        }

        for (let [dy, dx] of options) {
            const i = row + dy,
                j = col + dx;
            // console.log(i,j);
            if (isInArea(i, j) && !isVisited(i, j) && checkEqual(i, j, idx)) {
                visitedBoard[i][j] = true;
                bt(i, j, idx + 1);
                visitedBoard[i][j] = false;
            }
        }
    }

    function checkEqual(i, j, idx) {
        return board[i][j] === word[idx];
    }

    function isVisited(i, j) {
        return visitedBoard[i][j];
    }

    function isInArea(i, j) {
        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) {
            return false;
        }
        return true;
    }
};
