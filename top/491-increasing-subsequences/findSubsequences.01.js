/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
    // backtrace
    const ansMap = new Map();
    let ans = [];
    bt([], 0);
    return ans;

    function bt(path, startIdx) {
        if (path.length >= 2) {
            // 满足条件
            const k = path.toString();
            if (!ansMap.get(k)) {
                ans.push(path.slice());
                ansMap.set(k, 1);
            }
        }

        // 对于每一个选择
        for (let i = startIdx; i < nums.length; i++) {
            const x = nums[i];
            if (path.length > 0 && path[path.length - 1] > x) continue;
            // if (path.indexOf(x) !== path.length - 1) continue;
            path.push(x); // 选择

            bt(path, i + 1);

            path.pop(); // 撤销选择
        }
    }
};
