/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function (nums) {
	// 双指针
	let left = 0,
	    right = 0;
	const len = nums.length;
    
	//    left ... right ...
	// 11111^000000000^XXXXXX
	while (right < len) {
	    if (nums[right] !== 0) {
		swap(left, right);
		left++
	    }
	    right++;
	}
    
	return nums;
    
	function swap(left, right) {
	    const tmp = nums[left];
	    nums[left] = nums[right];
	    nums[right] = tmp;
	}
    };