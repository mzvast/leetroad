/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    // dp(i,j) := distance from word1[0..i] to word2[0..j]
    //
    // ans = dp(len1,len2)
    const memo = new Map();
    const len1 = word1.length,
        len2 = word2.length;
    return dp(len1 - 1, len2 - 1);

    function dp(i, j) {
        const key = `${i},$${j}`;
        if (memo.has(key)) return memo.get(key);

        // edge case
        if (i === -1) {
            return j + 1;
        }
        if (j === -1) {
            return i + 1;
        }
        let res;
        // skip
        if (word1[i] === word2[j]) {
            res = dp(i - 1, j - 1);
        } else {
            // delete
            res = 1 + Math.min(dp(i - 1, j), dp(i, j - 1));
        }
        memo.set(key, res);
        return memo.get(key);
    }
};
