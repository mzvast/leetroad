// 上下车问题
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    // ( +1
    // ) -1
    // 0的时候是一个完整的部分

    let ans = '';
    let cnt = 0, // 车上的人数
        pre = 0;
    // pre 前一个0位置
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') cnt += 1;
        else {
            cnt -= 1;
        }
        if (cnt !== 0) continue;
        ans += s.slice(pre + 1, i);
        pre = i + 1;
    }

    return ans;
};
