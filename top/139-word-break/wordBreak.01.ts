/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
//@ts-ignore
var wordBreak = function (s, wordDict) {
    // recursion
    // leetcode => wordBreak('leetcode') + inDict('')
    // leetcode => wordBreak('leetcod') + inDict('e')
    // ...
    // leetcode => wordBreak('') + inDict('leetcode')
    const memo = {};
    // edge case
    return check(s);

    function check(s) {
        if (memo[s] !== void 0) return memo[s];
        if (inDict(s)) {
            memo[s] = true;
            return memo[s];
        }
        let ans = false;
        for (let i = 1, len = s.length; i < len; i++) {
            const left = s.slice(0, len - i),
                right = s.slice(len - i);

            if (check(left) && inDict(right)) {
                ans = true;
                break;
            }
        }
        memo[s] = ans;
        return memo[s];
    }

    function inDict(x) {
        return wordDict.includes(x);
    }
};

// + memo
