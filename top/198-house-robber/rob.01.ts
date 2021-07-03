/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function (nums) {
	const n = nums.length;
	// recusion
	let memo = {};
	return helper(nums, n - 1);
	function helper(nums, i) {
	    if (i < 0) return 0;
	    if (memo[i] !== void 0) return memo[i];
	    memo[i] = Math.max(helper(nums, i - 2) + nums[i], helper(nums, i - 1));
	    return memo[i]
	}
    };