/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    const n = nums.length;

    const memo = new Map();

    return dp(0);

    // dp(i) := 能否从当前位置跳到最后
    function dp(i) {
        if (memo.has(i)) return memo.get(i);
        if (i >= n - 1) {
            //走0步
            memo.set(i, true);
            return true;
        }
        if (i + nums[i] >= n - 1) {
            memo.set(i, true);
            return true; // 剪枝
        }
        // 走1到nums[i]之间的数能不能到
        for (let j = 1; j <= nums[i]; j++) {
            if (dp(i + j)) {
                memo.set(i, true);
                return true;
            }
        }
        memo.set(i, false);
        return false;
    }
};
// 花花 https://www.youtube.com/watch?v=3mIc_mKP4yM
