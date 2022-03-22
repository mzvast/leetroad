/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let ans = [];
    dfs(1, []);
    return ans;

    function dfs(idx, buffer) {
        if (buffer.length === k) {
            ans.push(buffer.slice(0));
            return;
        }
        if (idx === n + 1) return;

        // select
        buffer.push(idx);
        dfs(idx + 1, buffer);
        buffer.pop(); // recover

        // not select
        dfs(idx + 1, buffer);
    }
};
