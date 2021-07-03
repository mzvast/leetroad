/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function (nums) {
	const n = nums.length;
	// dp[i] := max money after rob i
	// dp[i] = max(dp[i-2]+nums[i], dp[i-1])
	// [0,0,0...]
	// [    ^]
	let dp = Array(n + 1).fill(0);
	for (let i = 0; i < n; i++) {
	    dp[i] = Math.max((i > 1 ? dp[i - 2] : 0) + nums[i], (i > 0 ? dp[i - 1] : 0));
	}
	// console.log(dp);
	return dp[n - 1];
    };