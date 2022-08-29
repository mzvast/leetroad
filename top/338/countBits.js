// dp+ Brian Kernighan's Algorithm
// x&(x-1) 把x最右侧的1置为0
//
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    // f(x) := x的2进制表示1的个数
    // f(x) = f(x&(x-1))+1

    const ans = [0];

    const dp = Array(n + 1).fill(0);
    // base case
    // dp[0]
    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i & (i - 1)] + 1;
        ans.push(dp[i]);
    }

    return ans;
};
