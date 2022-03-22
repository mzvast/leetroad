/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    // 01背包问题

    const sum = nums.reduce((pre, cur) => pre + cur, 0);
    if (sum % 2) return false; // 不能整除
    const target = sum / 2;
    let ans = false;
    dfs(0, target);
    return ans;

    function dfs(idx, target) {
        if (target === 0) {
            ans = true;
            return;
        }
        if (target < 0 || idx === nums.length) return;
        // select

        dfs(idx + 1, target - nums[idx]);

        // unselect
        dfs(idx + 1, target);
    }
};
