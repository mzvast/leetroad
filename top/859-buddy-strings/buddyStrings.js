/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
    // 长度不相等
    if (s.length !== goal.length) return false;
    if (s === goal) return hasRepeat(s); // 完全一样，必须有重复字符 eg, aabc

    // 长度相等且只有2位不一样
    // a[x]bc[y]d
    // a[y]bc[x]d

    // 找到两个不相等的字符
    let i = 0; // 第一个位置

    while (i < s.length && s[i] === goal[i]) i += 1;

    let j = i + 1;

    while (j < s.length && s[j] === goal[j]) j += 1;
    if (j === s.length) return false; // 遍历完，只有1个不一样

    // 有两个不一样
    if (s[i] !== goal[j] || s[j] !== goal[i]) return false; // 不满足交叉相等

    j += 1;
    while (j < s.length) {
        if (s[j] !== goal[j]) return false; // 发现第3个不一样
        j += 1;
    }

    return true;

    function hasRepeat(str) {
        const cnt = Array(26).fill(0);
        for (let s of str) {
            const idx = s.charCodeAt(0) - 97;
            cnt[idx] += 1;
            if (cnt[idx] === 2) return true;
        }
        return false;
    }
};
