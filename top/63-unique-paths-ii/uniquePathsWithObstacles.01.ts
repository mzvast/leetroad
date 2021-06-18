/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function (obstacleGrid) {
	const m = obstacleGrid.length, // row
	    n = obstacleGrid[0].length; // col 
	// console.log(obstacleGrid);
	// const memo = Array(m + 1).fill(Array(n + 1).fill(-Infinity));//new Map(); 这是不对的，数组是引用同一个
	let memo = [];
	for(let i=0;i<=m;i++){
	    let cur = []
	    for(let j=0;j<=n;j++){
		cur.push(-Infinity);
	    }
	    memo.push(cur);
	}
	// console.log(memo);
	return helper(m, n);
    
	function helper(x, y) {
	    if (x <= 0 || y <= 0) return 0;
	    if (x === 1 && y === 1) return 1 - obstacleGrid[0][0]; // 这
	    if (Number.isFinite(memo[x][y])) {
		return memo[x][y];
	    }
	    let ans;
    
	    if (obstacleGrid[x - 1][y - 1] === 1) {
		ans = 0;
	    } else {
		ans = helper(x - 1, y) + helper(x, y - 1);
	    };
	    memo[x][y] = ans;
	    return memo[x][y];
	}
    };