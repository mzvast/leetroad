/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function (matrix) {

    const len = matrix.length;
    // O(n^2)
    const ax = [];// 辅助数组
    // round 
    for (let i = 0; i < len; i++) {
        // create
        let cur = [];
        // idx
        for (let j = len - 1; j >= 0; j--) {
            cur.push(matrix[j][i])
        }
        // save
        ax.push(cur);
    }

    // copy
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            matrix[i][j] = ax[i][j];
        }
    }
    return matrix;
};