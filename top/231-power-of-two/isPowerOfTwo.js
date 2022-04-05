/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    // 是否只有一个1
    // bk算法
    return n > 0 && (n & (n - 1)) === 0;
};
