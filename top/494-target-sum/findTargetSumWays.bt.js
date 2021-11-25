/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    let ans = 0;
    const n = nums.length;
    const options = [+1, -1];
    bt(target, 0);
    return ans;

    function bt(target, idx) {
        if (idx === n) {
            if (target === 0) {
                return ans++;
            }
            return;
        }

        for (const opt of options) {
            target = target + opt * nums[idx];
            bt(target, idx + 1);
            target = target - opt * nums[idx];
        }
    }
};
