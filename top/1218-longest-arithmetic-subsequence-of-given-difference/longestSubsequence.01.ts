/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
//  https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-1218-longest-arithmetic-subsequence-of-given-difference/
// [..., x-2d, x-d, x, ...]
//  dp[i] := max length of sequence ends with x
//  dp[x] = max(0, dp[x – diff]) + 1

//  Time complexity: O(n)
//  Space complexity: O(n)
var longestSubsequence = function (arr, difference) {
    const dp = new Map();
    let ans = 0;
    for (let x of arr) {
        dp.set(x, (dp.get(x - difference) || 0) + 1);
        ans = Math.max(ans, dp.get(x));
    }
    return ans;
};