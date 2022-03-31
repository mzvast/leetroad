/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
    // wb
    const s = num.toString();
    let ans = 0;
    // let res = [];
    dfs([], 0);
    // console.log(res);
    return ans;
    function dfs(path, idx) {
        if (idx === s.length) {
            ans += 1;
            // res.push(path.slice());
            return;
        }

        // select 1
        path.push(s.slice(idx, idx + 1));
        idx += 1;
        dfs(path, idx);
        // unselect 1
        path.pop();
        idx -= 1;

        if (
            idx <= s.length - 2 &&
            (s[idx] !== '0') & (+s.slice(idx, idx + 2) < 26)
        ) {
            // select 2
            path.push(s.slice(idx, idx + 2));
            idx += 2;
            dfs(path, idx);
            // unselect 2
            path.pop();
            idx -= 2;
        }
    }
};
