/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function (s, p) {
	// sliding window
	const need = {},
	    window = {};
	let left = 0, right = 0,//[left,right)
	    // ans
	    valid = 0, ans = [];
    
	// build need
    
	for (const c of p) {
	    need[c] = (need[c] || 0) + 1;
	}
    
	const needSize = Object.keys(need).length;
	// init window
	for (const c of s) {
	    window[c] = 0;
	}
    
	while (right < s.length) {
	    const add = s[right];
	    right++;
    
	    // update window
    
	    if (need[add]) {
		window[add]++;
		if (need[add] === window[add]) valid++;
	    }
    
	    while (right - left >= p.length) {
		// check valid
		if (valid === needSize) {
		    ans.push(left);
		}
		const del = s[left];
		left++;
    
		// update window
    
		if (need[del]) {
		    if (need[del] === window[del]) valid--;
		    window[del]--;
		}
	    }
	}
    
	return ans;
    };