/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function (height) {
	// 暴力法 超时，因为数据规模n^2
	// O(n^2)
	const len = height.length;
	let max = -Infinity;
	for (let i = 0; i < len; i++) {
	    for (let j = i + 1; j < len; j++) {
		const cur = Math.min(height[j], height[i]) * (j - i);
		max = Math.max(max, cur);
	    }
	}
    
	return max;
    };