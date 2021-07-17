// backtrace

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    // 回溯
    // dp[i][j] := s[i:j] 是否是回文
    const n = s.length;
    let ans = [],
        tmp = [];

    backtrack(0);

    return ans;

    function backtrack(i) {
        if (i === n) {
            ans.push(tmp.slice()); // must copy
        }
        for (let j = i; j < n; j++) {
            if (isPara(i, j) /*dp[i][j]*/) {
                tmp.push(s.slice(i, j + 1));
                backtrack(j + 1);
                tmp.pop();
            }
        }
    }

    function isPara(start, end) {
        let len = Math.floor((end - start + 1) / 2);
        for (let i = 0; i <= len; i++) {
            if (s[start + i] !== s[end - i]) return false;
        }
        return true;
    }
};
