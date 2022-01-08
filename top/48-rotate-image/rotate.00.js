/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    // 追加
    const len = matrix.length;
    // O(n^2)
    // round
    for (let i = 0; i < len; i++) {
        // create
        let cur = [];
        // idx
        for (let j = len - 1; j >= 0; j--) {
            cur.push(matrix[j][i]);
        }
        // save
        matrix.push(cur);
    }

    matrix.splice(0, len);
    return matrix;
};
