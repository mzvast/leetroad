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
    
	// 降维，滚动数组
	const n = prices.length;
    
	if (n <= 1) return 0;
    
	let sold = 0
	let hold = -prices[0]
	let rest = 0
    
	// sold[0] = rest[0] = 0;
	// hold[0] = -prices[0];
	for (let i = 1; i < n; i++) {
	    let prevSold = sold;
	    sold = hold + prices[i];
	    hold = Math.max(rest - prices[i], hold)
	    rest = Math.max(prevSold, rest);
	}
    
	// console.log(sold,hold,rest)
    
	return Math.max(sold, rest);
    };