/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function (n, k, row, column) {
    // backtrack

    // 纵坐标向下为x
    const ops = [
        {x: 1, y: 2},
        {x: 2, y: 1},
        {x: 2, y: -1},
        {x: 1, y: -2},
        {x: -1, y: -2},
        {x: -2, y: -1},
        {x: -2, y: 1},
        {x: -1, y: 2},
    ];

    let total = Math.pow(8, k),
        count = 0,
        r = row,
        c = column;

    backtrack(0);

    return count / total;

    function backtrack(i) {
        if (i === k) {
            count++;
            return;
        }

        for (let op of ops) {
            [r, c] = [r + op.x, c + op.y]; // do
            if (isInArea(r, c)) {
                backtrack(i + 1);
            }
            [r, c] = [r - op.x, c - op.y]; // undo
        }
    }

    function isInArea(r, c) {
        return r >= 0 && r < n && c >= 0 && c < n;
    }
};

// LTE
// console.log(knightProbability(8, 30, 6, 4));
