/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function (s, t) {
	// sliding window
	const need = {}, // 需求
	    window = {}; // 窗口
	let left = 0, right = 0,// [left, right)
	    valid = 0,
	    // ans的起始索引和覆盖长度
	    start = 0,
	    len = Infinity;
	for (const c of t) {
	    need[c] = (need[c] || 0) + 1;
	}

	const needSize = Object.keys(need).length;
    
	// console.log(need);
    
	while (right < s.length) {
	    const add = s[right];
	    right++;
    
	    // update window data
	    if (need[add]) {
		window[add] = (window[add] || 0) + 1;
		if (window[add] === need[add]) {
    
		    valid++;
		}
	    }
    
    
	    while (valid === needSize) {
		// update ans
		if (right - left < len) {// smaller
		    start = left;
		    len = right - left;
		}
    
		const del = s[left];
		left++;
    
		if (need[del]) {
    
		    if (window[del] === need[del]) {
			valid--;
		    }
		    window[del] = (window[del] || 0) - 1;
		}
	    }
    
	}
    
	return len === Infinity ? "" : s.substr(start, len);
    };