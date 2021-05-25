/**
 * @param {number} n
 * @return {number}
 */
 var tribonacci = function (n) {
    let zero = 0,
        one = 1,
        two = 1,
        cur = 0;
    if (n === 0) return zero;
    if (n === 1) return one;
    if (n === 2) return two;
    for (let i = 3; i <= n; i++) {
        cur = zero + one + two;
        zero = one;
        one = two;
        two = cur;
    }
    return cur;
};