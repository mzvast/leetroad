/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let farthest = 0;
    for (let i = 0; i < nums.length; i++) {
        farthest = Math.max(farthest, i + nums[i]);
	// 卡在原地且不在终点
        if (farthest <= i && i !== nums.length - 1) return false;
    }
    return farthest >= nums.length - 1;
};
// greedy

// labuladong 看书
// 花花 https://www.youtube.com/watch?v=3mIc_mKP4yM