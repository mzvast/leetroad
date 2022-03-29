/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    const n = s.length;

    let ans = 0;

    // i中心
    for (let i = 0; i < n; i++) {
        judge(i, i); // 奇数长度
        judge(i, i + 1); // 偶数长度
    }

    return ans;

    function judge(l, r) {
        while (l >= 0 && r < n && s[l] === s[r]) {
            ans += 1;
            l -= 1;
            r += 1;
        }
    }
};
