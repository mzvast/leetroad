// 题改：返回所有和为target的元素对，不能重复
// input: nums = [1,3,1,2,2,3], target = 4
// output:[[1,3],[2,2]]
// 双指针
//

function twoSumTarget(nums, target) {
    nums = nums.sort(); // 排序
    const result = [];
    // 双指针
    let lo = 0,
        hi = nums.length - 1;
    while (lo < hi) {
        const sum = nums[lo] + nums[hi];
        let left = nums[lo], // lo初始值
            right = nums[hi]; // hi初始值
        if (sum < target) {
            lo++;
        } else if (sum > target) {
            hi--;
        } else {
            result.push([nums[lo], nums[hi]]);

            while (lo < hi && nums[lo] === left /*跳过重复元素*/) lo++;
            while (lo < hi && nums[hi] === right /*跳过重复元素*/) hi--;
        }
    }
    return result;
}

const result = twoSumTarget([1, 3, 1, 2, 2, 3], 4);
console.log(result);
