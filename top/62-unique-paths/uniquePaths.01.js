/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

const memo = new Map();
var uniquePaths = function (m, n) {
    // 走到左边格子+走到右边格子
    if (m < 0 || n < 0) return 0;
    if (m === 1 && n === 1) return 1;
    if (memo.get(m + ',' + n)) return memo.get(m + ',' + n);
    let ans = uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
    memo.set(m + ',' + n, ans);
    return ans;
};
