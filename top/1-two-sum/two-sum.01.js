// https://leetcode-cn.com/problems/two-sum/
var twoSum = function(nums, target) {

    for(let i = 0, len = nums.length; i < len; i ++){
        for(let j = i+1; j < len ; j++){
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
};

const result = twoSum([3,2,4],6)

console.log(result)

// 时间复杂度
// O(n^2)