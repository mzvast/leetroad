/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    // BK算法
    let t = x ^ y; //xor
    let ans = 0;
    while (t !== 0) {
        t = t & (t - 1);
        ans += 1;
    }

    return ans;
};
