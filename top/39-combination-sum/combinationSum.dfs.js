/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const ans = [];
    dfs(0, target, []);
    return ans;

    function dfs(idx, target, buffer) {
        if (idx === candidates.length) return;
        if (target === 0) {
            ans.push(buffer.slice(0));
            return;
        } else if (target < 0) return;

        // select
        buffer.push(candidates[idx]);
        dfs(idx, target - candidates[idx], buffer);
        buffer.pop();
        // not select
        dfs(idx + 1, target, buffer);
    }
};
