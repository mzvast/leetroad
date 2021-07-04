/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function (prices) {
	// 当天的状态
	// sold
	// hold
	// rest
    
	// sold[i] := 第i天卖出的最大收益
	// hold[i] := 第i天持有的最大收益
	// rest[i] := 第i天休息的最大收益
    
	const n = prices.length;
    
	if(n<=1) return 0;
    
	const sold = Array(n + 1).fill(0);
	const hold = Array(n + 1).fill(0);
	const rest = Array(n + 1).fill(0);
    
	// sold[0] = rest[0] = 0;
	hold[0] = -prices[0];
	for (let i = 1; i < n; i++) {
	    sold[i] = hold[i - 1] + prices[i];
	    hold[i] = Math.max(rest[i - 1] - prices[i], hold[i - 1])
	    rest[i] = Math.max(sold[i - 1], rest[i - 1]);
	}
    
	// console.log(sold,hold,rest)
    
	return Math.max(sold[n - 1], rest[n - 1]);
    };