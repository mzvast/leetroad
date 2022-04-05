/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    // 上下车问题，车上人数不能为负数
    let s1 = '';
    // 1次扫描去无效右括号
    for (let i = 0, cnt = 0; i < s.length; i++) {
        if (s[i] === '(') cnt += 1;
        else if (s[i] === ')') {
            if (cnt === 0) {
                continue;
            } else {
                cnt -= 1;
            }
        }
        s1 += s[i];
    }
    let ans = '';
    // 2次扫描去无效左括号
    for (let i = s1.length - 1, cnt = 0; i >= 0; i--) {
        if (s1[i] === ')') cnt += 1;
        else if (s1[i] === '(') {
            if (cnt === 0) {
                continue;
            } else {
                cnt -= 1;
            }
        }
        ans = s1[i] + ans;
    }
    return ans;
};
