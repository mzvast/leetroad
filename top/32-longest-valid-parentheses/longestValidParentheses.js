/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    // dp[i] := 以第i位结尾的有效括号长度
    // dp[i] = 0, s[i]==='('
    // dp[i] = dp[i-2]+2 ,end with ()
    // dp[i] = dp[j-1] + 2 + dp[i-1],j = i-dp[i-1]-1 ,end with ))
    const n = s.length;
    const dp = Array(n).fill(0);
    let ans = 0;
    for (let i = 1; i < n; i++) {
        if (s[i] === '(') continue;
        if (s[i - 1] === '(') dp[i] = (i - 2 >= 0 ? dp[i - 2] : 0) + 2;
        else {
            // ))
            const j = i - dp[i - 1] - 1;
            if (j < 0 || s[j] === ')') continue;
            dp[i] = 2 + dp[i - 1] + (j - 1 >= 0 ? dp[j - 1] : 0);
        }
        ans = Math.max(ans, dp[i]);
    }

    return ans;
};
