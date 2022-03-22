/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
    // 仓库选址问题

    const n = nums.length;

    nums.sort((a, b) => (a < b ? -1 : 1));
    const mid = nums[Math.floor(n / 2)];
    let sum = 0;
    for (let x of nums) sum += Math.abs(x - mid);

    return sum;
};
