/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const dict = {};
    const memo = new Map();
    for (let x of wordDict) dict[x] = true;

    return wb(0, s.length);

    function wb(l, r) {
        if (memo.has(`${l}-${r}`)) return memo.get(`${l}-${r}`);
        if (l === r) return true;
        let p = l;
        let ans = false;
        while (p < r) {
            if (wb(l, p) && inDict(p, r)) {
                ans = true;
                break;
            }
            p += 1;
        }
        memo.set(`${l}-${r}`, ans);
        return ans;
    }

    function inDict(l, r) {
        return dict[s.slice(l, r)] === true;
    }
};
