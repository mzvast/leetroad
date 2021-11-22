/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const visited = new Map();

    const n = nums.length; // n>0
    const bar = Math.floor(n / 2);

    for (let i of nums) {
        const times = visited.has(i) ? visited.get(i) + 1 : 1;
        visited.set(i, times);
        if (times === bar + 1) {
            // add only once
            return i;
        }
    }
};
