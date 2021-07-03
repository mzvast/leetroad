/**
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalRectangle = function (matrix) {
	if(matrix.length===0) return 0;
	let m = matrix.length,
	    n = matrix[0].length;
    
	let sums = [];
    
	for (let i = 0; i <= m; i++) {
	    sums.push(Array(n + 1).fill(0));
	}
    
	for (let i = 1; i <= m; i++) {
	    for (let j = 1; j <= n; j++) {
		sums[i][j] = sums[i - 1][j] + sums[i][j - 1] - sums[i - 1][j - 1] + Number(matrix[i - 1][j - 1]);
    
	    }
	}
    
	// console.log(sums)
    
	let ans = 0;
	for (let i = 1; i <= m; i++) {
	    for (let j = 1; j <= n; j++) {
		for (let k = m - i + 1; k > 0; k--) {
		    for (let l = n - j + 1; l > 0; l--) {
			let sum = sums[i + k - 1][j + l - 1] - sums[i + k - 1][j - 1] - sums[i - 1][j + l - 1] + sums[i - 1][j - 1];
			if (sum === k * l) {
			    ans = Math.max(ans, sum);
			    break;
			}
		    }
		}
	    }
	}
    
	return ans;
    };