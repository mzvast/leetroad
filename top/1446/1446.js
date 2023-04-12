/**
 * 1446. 连续字符
给你一个字符串 s ，字符串的「能量」定义为：只包含一种字符的最长非空子字符串的长度。

请你返回字符串 s 的 能量。

 

示例 1：

输入：s = "leetcode"
输出：2
解释：子字符串 "ee" 长度为 2 ，只包含字符 'e' 。
示例 2：

输入：s = "abbcccddddeeeeedcba"
输出：5
解释：子字符串 "eeeee" 长度为 5 ，只包含字符 'e' 。
 

提示：

1 <= s.length <= 500
s 只包含小写英文字母。
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
    let ans = 0,
        cnt = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i] !== s[i - 1]) {
            // update ans
            ans = Math.max(ans, cnt);
            cnt = 1;
        } else {
            cnt += 1;
        }
    }
    return Math.max(ans, cnt);
};
