/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const ans = [];

    bt([], 0, 0, 0);

    return ans;

    function bt(path, open, close, idx) {
        if (idx === n * 2) {
            return ans.push(path.join(''));
        }

        if (open < n) {
            path.push('(');
            bt(path, open + 1, close, idx + 1);
            path.pop();
        }

        if (close < open) {
            path.push(')');
            bt(path, open, close + 1, idx + 1);
            path.pop();
        }
    }
};
