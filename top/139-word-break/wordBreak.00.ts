/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    // recursion
    // leetcode => wordBreak('leetcode') + inDict('')
    // leetcode => wordBreak('leetcod') + inDict('e')
    // ...
    // leetcode => wordBreak('') + inDict('leetcode')

    // edge case
    return check(s);

    function check(s) {
        if (inDict(s)) return true;
        let ans = false;
        for (let i = 1, len = s.length; i < len; i++) {
            const left = s.slice(0, len - i),
                right = s.slice(len - i);

            if (check(left) && inDict(right)) {
                ans = true;
                break;
            }
        }
        return ans;
    }

    function inDict(x) {
        return wordDict.includes(x);
    }
};

// LTE