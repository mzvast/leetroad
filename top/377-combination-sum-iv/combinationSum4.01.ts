/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    // recursion+ memo
    // dp(nums, target) := 多少种组合构成target
    // edge case
    // dp(nums, 0) = 1;
    const memo = Array(target + 1).fill(-1);
    memo[0] = 1;
    return dp(nums, target);

    function dp(nums, target) {
        if (target < 0) return 0;
        if (memo[target] !== -1) return memo[target];
        let ans = 0;
        for (let num of nums) {
            ans += dp(nums, target - num);
        }
        return (memo[target] = ans);
    }
};
