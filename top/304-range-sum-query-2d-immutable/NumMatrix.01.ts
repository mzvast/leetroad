/**
 * @param {number[][]} matrix
 */
 var NumMatrix = function (matrix) {
	// dp[i][j] := sum(0:i, 0:j)
	// dp[i][j] = dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1] + matrix[i][j]
    
	let sums = []
	let m = matrix.length,
	    n = matrix[0].length;
    
	for (let i = 0; i <= m; i++) {
	    sums.push(Array(n + 1).fill(0));
	}
    
	for (let i = 1; i <= m; i++) {
	    for (let j = 1; j <= n; j++) {
		sums[i][j] = sums[i - 1][j] + sums[i][j - 1] - sums[i - 1][j - 1] + matrix[i - 1][j - 1];
	    }
	}
    
	this.sums = sums;
	// console.log(sums)
    };
    
    /** 
     * @param {number} row1 
     * @param {number} col1 
     * @param {number} row2 
     * @param {number} col2
     * @return {number}
     */
    NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
	return this.sums[row2 + 1][col2 + 1] - this.sums[row2 + 1][col1] - this.sums[row1][col2 + 1] + this.sums[row1][col1];
    
    
    
    };
    
    /**
     * Your NumMatrix object will be instantiated and called as such:
     * var obj = new NumMatrix(matrix)
     * var param_1 = obj.sumRegion(row1,col1,row2,col2)
     */