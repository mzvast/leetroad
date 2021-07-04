/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function (nums) {
	// dp[i] := max money after rob i
	// dp[i] = max(dp[i-2]+nums[i], dp[i-1])
    
	// case 1 首尾都不选
	// case 2 只要首，range[0,n-2]
	// case 3 只要尾，range[1,n-1]
	// case2和case3 包含了 case1的情况
	const n = nums.length;
	if (n === 1) return nums[0];// only one number
	return Math.max(helper(0, n - 2), helper(1, n - 1))
    
	function helper(start, end) {
	    if (end < 0) return 0;
	    const dp = Array(n + 1).fill(0);
	    for (let i = start; i <= end; i++) {
		dp[i] = Math.max((i > 1 ? dp[i - 2] : 0) + nums[i], (i > 0 ? dp[i - 1] : 0));
	    }
	    return dp[end]
	}
    };