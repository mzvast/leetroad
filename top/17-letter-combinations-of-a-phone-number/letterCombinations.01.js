/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const ans = [];
    const n = digits.length;

    const dict = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    };

    bt([], 0);

    return ans;

    function bt(path, idx) {
        if (idx === n) {
            if (path.length > 0) {
                return ans.push(path.join(''));
            }
            return ans;
        }

        for (let d of dict[digits[idx]]) {
            path.push(d);
            bt(path, idx + 1);
            path.pop();
        }
    }
};
