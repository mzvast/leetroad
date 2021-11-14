/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function (nums) {
	const seen = {};
	for (const i of nums) {
	    seen[i] = (seen[i] || 0) + 1;
	}
    
	for (const k in seen) {
	    if (seen[k] === 1) {
		return k
	    }
	}
	return null;
    };