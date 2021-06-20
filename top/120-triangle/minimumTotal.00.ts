/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    const m = triangle.length;

    // f[i][j] = minTotalOf(i,j);
    // f[i][j] = min(f[i-1][j],f[i-1][j-1]) + triangle[i-1][j-1]

    const f = [];
    for (let i = 0; i <= m; i++) {
        const cur = Array(m).fill(+Infinity);
        f.push(cur);
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= i; j++) {
            f[i][j] = triangle[i - 1][j - 1];
            if (i === 1 && j === 1) continue;
            if (j === 1) {
                f[i][j] += f[i - 1][j];
            } else if (j === i) {
                f[i][j] += f[i - 1][j - 1];
            } else {
                f[i][j] += Math.min(f[i - 1][j], f[i - 1][j - 1]);
            }
        }
    }

    return Math.min(...f[m]);
};

// Time complexity:O(n^2)
// Space complexity: O(n^2)
