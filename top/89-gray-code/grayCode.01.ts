/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    // dp[i] := 第i个grayCode
    // dp[i] = dp[i-1] + [x|1<<i for x in reversed[dp[i-1]]] 这里+是数组拼接

    let dp = [0];

    // base case
    // dp[0]=0;

    for (let i = 0; i < n; i++) {
        for (let len = dp.length, j = len - 1; j >= 0; j--) {
            dp.push(dp[j] | (1 << i));
        }
    }

    return dp;
};
