/**
 * @param {number[]} nums
 */
 var NumArray = function (nums) {

    const len = nums.length;
    if (len === 0) return;
    this.prefixSum = [nums[0]]; // 下标表示下标为i的prefixSum

    for (let i = 1; i < len; i++) {
        this.prefixSum[i] = this.prefixSum[i - 1] + nums[i];
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    if (left === 0) return this.prefixSum[right]
    return this.prefixSum[right] - this.prefixSum[left - 1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */