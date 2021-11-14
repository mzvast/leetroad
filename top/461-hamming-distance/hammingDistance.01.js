/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    const res = (x ^ y).toString(2);
    let sum = 0;
    for (const i of res) {
        if (i === '1') sum++;
    }
    return sum;
};
