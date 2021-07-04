/**
 * @param {number} n
 * @return {number}
 */
 var numSquares = function (n) {
	// dp[i] := ans
	// dp[i] = min{dp[i-j*j]+1} 1<=j*j<=i
	// dp[0] = 0
    
	const dp = Array(n + 1).fill(Infinity);
	// base case
	dp[0] = 0;
	for (let i = 1; i <= n; i++) {
	    for (let j = 1; j * j <= i; j++) {
		dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
	    }
	}
    
	return dp[n]
    };