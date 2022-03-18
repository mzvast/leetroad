/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let ans = -Infinity,
        max_num = 1,
        min_num = 1;

    for (let x of nums) {
        if (x < 0) [max_num, min_num] = [min_num, max_num]; // swap
        max_num = Math.max(x * max_num, x);
        min_num = Math.min(x * min_num, x);
        ans = Math.max(max_num, ans);
    }
    return ans;
};
