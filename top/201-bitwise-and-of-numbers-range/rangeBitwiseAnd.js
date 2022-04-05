/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function (left, right) {
    // 给定两个整数，我们要找到它们对应的二进制字符串的公共前缀。
    // 应用BK算法
    while (right > left) {
        right = right & (right - 1);
    }
    return right;
};
