/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    const m = triangle.length;

    // f[i][j] = minTotalOf(i,j);
    // f[i][j] = min(f[i-1][j],f[i-1][j-1]) + triangle[i-1][j-1]

    const f = [];
    for (let i = 0; i <= 1; i++) {
        const cur = Array(m).fill(+Infinity);
        f.push(cur);
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= i; j++) {
            f[1][j] = triangle[i - 1][j - 1];
            if (i === 1 && j === 1) continue;
            if (j === 1) {
                f[1][j] += f[0][j];
            } else if (j === i) {
                f[1][j] += f[0][j - 1];
            } else {
                f[1][j] += Math.min(f[0][j], f[0][j - 1]);
            }
        }
        let tmp = f[0];
        f[0] = f[1];
        f[1] = tmp;
    }

    return Math.min(...f[0]);
};

// Time complexity:O(n^2)
// Space complexity: O(n)
