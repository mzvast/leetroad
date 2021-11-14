// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function (s) {
	// sliding window
	const window = {};// counter for window
	let left = 0, right = 0; // pointer for window edge,[left, right)
	let ans = 0;
    
	while (right < s.length) {
	    const add = s[right];
    
	    right++;
	    window[add] = (window[add] || 0) + 1;
    
	    // console.debug(left, right);
    
	    while (window[add] > 1) {
		const del = s[left];
		left++;
		window[del]--;
	    }
	    ans = Math.max(ans, right - left)
	}
    
	return ans;
    };