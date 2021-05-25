/**
 * @param {number} n
 * @return {number}
 */
 const memo = {
    1: 1,
    2: 2
}
var climbStairs = function (n) {
    // 相当于先爬n-1，再爬1
    // 再加上先爬n-2，再爬2
    if (memo[n]) return memo[n];
    const ans = climbStairs(n - 1) + climbStairs(n - 2);
    memo[n] = ans;
    return memo[n];
};