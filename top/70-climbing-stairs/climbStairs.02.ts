/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
    let two = 1,
        one = 1,
        cur = 1;
    for (let i = 2; i <= n; i++) {
        cur = two + one;
        two = one;
        one = cur;
    }
    return cur;
};
