// backtrace + dp
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const n = s.length;
    let ans = [],
        tmp = [];

    // 用dp预处理
    // dp[i][j] := s[i:j] 是否是回文
    // dp[i][j] = dp[i+1][j-1] and s[i]===s[j]

    const dp = Array(n)
        .fill(0)
        .map(() => Array(n).fill(true));

    // base case
    // dp[x][x] = true;

    for (let i = n - 1; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
            } else {
                dp[i][j] = false;
            }
        }
    }

    backtrack(0);

    return ans;

    function backtrack(i) {
        if (i === n) {
            ans.push(tmp.slice()); // must copy
        }
        for (let j = i; j < n; j++) {
            if (dp[i][j]) {
                tmp.push(s.slice(i, j + 1));
                backtrack(j + 1);
                tmp.pop();
            }
        }
    }

    // function isPara(start, end) {
    //     let len = Math.floor((end - start + 1) / 2);
    //     for (let i = 0; i <= len; i++) {
    //         if (s[start + i] !== s[end - i]) return false;
    //     }
    //     return true;
    // }
};
