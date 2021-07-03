/**
 * @param {number[][]} matrix
 * @return {number}
 */
 var countSquares = function (matrix) {
	const m = matrix.length,
	    n = matrix[0].length;
    
	let sums = [];
    
	for (let i = 0; i <= m; i++) {
	    sums.push(Array(n + 1).fill(0));
	}
    
	for (let i = 1; i <= m; i++) {
	    for (let j = 1; j <= n; j++) {
		sums[i][j] =
		    sums[i - 1][j]
		    + sums[i][j - 1]
		    - sums[i - 1][j - 1]
		    + matrix[i - 1][j - 1]
	    }
	}
    
    
	let count = 0;
    
	for (let i = 1; i <= m; i++) {
	    for (let j = 1; j <= n; j++) {
		for (let k = Math.min(m - i + 1, n - j + 1); k > 0; k--) {
		    let sum = sums[i + k - 1][j + k - 1] - sums[i + k - 1][j - 1] - sums[i - 1][j + k - 1] + sums[i - 1][j - 1];
		    if (sum === k * k) {
			count++;
		    }
		}
	    }
	}
    
	return count;
    };