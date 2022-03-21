/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    let ans = 0; // 方法数量
    const memo = new Map(); // id-target->value
    return dfs(0, target);

    function dfs(idx, target) {
        if (idx === nums.length) {
            if (target === 0) {
                return 1;
            }
            return 0;
        }
        const key = getKey(idx, target);
        if (memo.has(key)) {
            return memo.get(key);
        }
        let ans = 0;
        // +
        ans += dfs(idx + 1, target - nums[idx]);
        // -
        ans += dfs(idx + 1, target + nums[idx]);

        memo.set(key, ans);
        return ans;
    }

    function getKey(idx, target) {
        return `${idx}-${target}`;
    }
};
