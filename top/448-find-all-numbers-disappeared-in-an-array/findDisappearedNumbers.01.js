/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const leftMap = new Map();
    // build all
    const n = nums.length;
    for (let i = 1; i <= n; i++) {
        leftMap.set(i, true);
    }

    for (let i = 0; i < n; i++) {
        const element = nums[i];
        if (leftMap.has(element)) {
            leftMap.delete(element);
        }
    }

    return Array.from(leftMap.keys());
};
