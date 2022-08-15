/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    // 从一个中心点向两端找
    let ans = '';
    for (let i = 0; i < s.length; i++) {
        const s1 = getLongest(s, i, i); // 长度为计数的, 1+2n
        const s2 = getLongest(s, i, i + 1); // 长度为偶数的 2+2n
        if (s1.length > ans.length) ans = s1;
        if (s2.length > ans.length) ans = s2;
    }
    return ans;

    function getLongest(s, l, r) {
        // 双指针
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }
        return s.substr(l + 1, r - 1 - l);
    }
};
