// https://leetcode-cn.com/problems/two-sum/
var twoSum = function (nums, target) {
    const hashMap = new Map(); // <value,idx>
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        hashMap.set(nums[i], i);
    }
    for (let j = 0; j < len; j++) {
        const other = target - nums[j];
        if(hashMap.has(other)&&hashMap.get(other)!==j){
            const idx = hashMap.get(other);
            return [j, idx];
        }
        
    }
    return [-1, -1];
};

const result = twoSum([3, 2, 4], 6);

console.log(result);

// 使用hashMap
// 时间复杂度
// O(n)