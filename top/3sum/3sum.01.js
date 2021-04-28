var threeSum = function (nums) {
    nums = nums.sort((a, b) => (a < b ? -1 : 1)); // sort
    return threeSumTarget(nums, 0); // 3sum
};

function threeSumTarget(nums, target) {
    const len = nums.length;
    const result = [];
    for (let i = 0; i < len; i++) {
        const current = nums[i];
        // 2sum
        const match = twoSumTarget(
            nums,
            i + 1, // 下一个开始
            target - current
        );
        if (match.length) {
            for (const item of match) {
                item.unshift(current);
                result.push(item);
            }
        }
        // skip same
        while (i < len - 1 && nums[i] === nums[i + 1]) i++;
    }

    return result;
}

function twoSumTarget(nums, start, target) {
    const result = [];
    const len = nums.length;
    let lo = start,
        hi = len - 1;
    while (lo < hi) {
        const sum = nums[lo] + nums[hi];
        const left = nums[lo],
            right = nums[hi];
        if (sum < target) {
            lo++;
        } else if (sum > target) {
            hi--;
        } else {
            result.push([nums[lo], nums[hi]]);
            // skip same
            while (lo < hi && left === nums[lo]) lo++;
            while (lo < hi && right === nums[hi]) hi--;
        }
    }
    return result;
}
// const result = threeSum([-1, 0, 1, 2, -1, -4]);
// const result = threeSum([-1, 0, 1, 2, -1, -4]);
// const result = threeSum([0, 0]); // []
const result = threeSum([1, 2, -2, -1]); // []

console.log(result);
