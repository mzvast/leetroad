/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const ans = [];
    const n = candidates.length;

    bt([], target, 0);

    return ans;

    function bt(path, target, startIdx) {
        if (target === 0) {
            // 满足条件
            ans.push(path.slice(0));
            return;
        } else if (target < 0) {
            // 舍弃
            return;
        }

        for (let i = startIdx; i < n; i++) {
            const select = candidates[i];
            path.push(select); // 选择
            bt(path, target - select, i); // startIdx，只允许重复选择和向后选择
            path.pop(); // 撤销
        }
    }
};
