/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
    // s => f('catsand') + ['dog']
    // {['cat','sand'],['cats','and']} + ['dog']

    // const memo = {}
    return wb(s);
    function wb(s) {
        let ans = [];
        if (inDict(s)) {
            ans.push(s);
        }
        for (let i = 1, len = s.length; i < len; i++) {
            const left = s.substring(0, len - i),
                right = s.substring(len - i);
            if (!inDict(right)) continue;
            for (w of wb(left)) {
                ans.push(w + ' ' + right);
            }
        }
        return ans;
    }

    function inDict(x) {
        return wordDict.includes(x);
    }
};
