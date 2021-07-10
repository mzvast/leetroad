/**
 * @param {string[]} words
 * @return {number}
 */
 var longestStrChain = function (words) {
	// dp[i] := max length of chain of  (A[0]~A[i-1])
	// dp[i] = max{dp[j] + 1} if A[j] is prederrsor of A[i], 1<=j<i
    
	const n = words.length;
	// 长度从小到大排序
	words.sort((a, b) => a.length < b.length ? -1 : 1);
    
	// console.log(words);
	const dp = Array(n).fill(1);
    
	for (let i = 0; i < n; i++) {
	    for (let j = 0; j < i; j++) {
		if (isValid(words[j], words[i])) {
    
		    dp[i] = Math.max(dp[i], dp[j] + 1)
		    // console.log(`dp[${i}]=`, dp[i])
		    // console.log(words[j], '<', words[i], `dp[${i}]=`, dp[i], ',j=', j)
		}
	    }
	}
	// console.log(words);
	// console.log(dp);
    
	return Math.max.apply(null, dp);
    
	function isValid(a, b) {
	    // 长度必须差1
	    if (a.length + 1 !== b.length) return false;
	    // 双指针
	    let count = 0;
	    for (let i = 0, j = 0; i < a.length && j < b.length;) {
		if (a[i] === b[j]) {
		    ++i;
		    ++j;
		} else {
		    ++j;
		    ++count;
		}
	    }
	    return count <= 1;
	}
    };