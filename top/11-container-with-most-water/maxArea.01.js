/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function (height) {
	// 双指针
	// O(n)
	const len = height.length;
	let leftIdx = 0, rightIdx = len - 1;
    
	let max = -Infinity;
    
	while (leftIdx < rightIdx) {
	    const cur = Math.min(height[leftIdx], height[rightIdx]) * (rightIdx - leftIdx);
	    max = Math.max(max, cur);
	    // 移动较小的那个
	    if (height[leftIdx] < height[rightIdx]) {
		leftIdx++;
	    } else {
		rightIdx--;
	    }
	}
    
	return max;
    };