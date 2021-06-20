/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle):number {
    const m = triangle.length;

    const t = triangle; // alias
    // t[i][j] = minTotalOf(i,j);
    // t[i][j] += min(t[i-1][j],t[i-1][j-1])

    for (let i = 0; i < m; i++) {
        for (let j = 0; j <= i; j++) {
            if (i === 0 && j === 0) continue;
            if (j === 0) {
                t[i][j] += t[i - 1][j];
            } else if (j === i) {
                t[i][j] += t[i - 1][j - 1];
            } else {
                t[i][j] += Math.min(t[i - 1][j], t[i - 1][j - 1]);
            }
        }
    }

    return Math.min.apply(null, t[m - 1]);
};

// Time complexity:O(n^2)
// Space complexity: O(n) 
// no extra space
