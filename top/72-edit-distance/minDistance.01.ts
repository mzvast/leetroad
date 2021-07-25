/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    // dp(i,j) := word1[0:i] 和 word2[0:j] 的编辑距离
    const len1 = word1.length,
        len2 = word2.length;
    const memo = new Map();
    return dp(len1 - 1, len2 - 1);
    function dp(i, j) {
        const key = `${i},${j}`;
        if (memo.has(key)) {
            return memo.get(key);
        }
        if (i === -1) return j + 1; // 一个走完，返回另一个剩下的长度
        if (j === -1) return i + 1;
        let res;
        if (word1[i] === word2[j]) {
            res = dp(i - 1, j - 1);
        } else {
            res = Math.min(
                dp(i, j - 1) + 1, // insert
                dp(i - 1, j) + 1, // delete
                dp(i - 1, j - 1) + 1 // replace
            );
        }
        memo.set(key, res);
        return res;
    }
};
