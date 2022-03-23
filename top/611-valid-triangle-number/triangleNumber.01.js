/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
    let ans = 0;
    const n = nums.length;
    nums.sort((a, b) => (a < b ? -1 : 1));
    if (n < 3) return false;
    // [a..b]..c

    // c控制最长边
    for (let c = n - 1; c >= 2; c--) {
        let a = 0,
            b = c - 1;

        while (a < b) {
            if (nums[a] + nums[b] > nums[c]) {
                ans += b - a; // 只要满足，a从a+1..b-1都满足
                b -= 1; // 下一轮，缩小b
            } else {
                a += 1; // 不满足，尝试增加a
            }
        }
    }
    return ans;
};
