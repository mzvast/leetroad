/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const n = nums.length;
    nums.sort((a, b) => (a < b ? -1 : 1));

    let ans = [];
    for (let i = 0; i < n; i++) {
        const res = twoSumTarget(i + 1, -nums[i]);

        if (res) {
            for (let x of res) {
                ans.push([nums[i], ...x]);
            }
            while (i < n - 1 && nums[i] === nums[i + 1]) i += 1;
        }
    }

    return ans;

    function twoSumTarget(start, target) {
        let l = start,
            r = n - 1,
            buffer = [];
        while (l < r) {
            const left = nums[l],
                right = nums[r];
            const sum = left + right;

            if (sum < target) l += 1;
            else if (sum > target) r -= 1;
            else {
                buffer.push([left, right]);
                while (l < r && nums[l] === left) l += 1;
                while (l < r && nums[r] === right) r -= 1;
            }
        }
        return buffer;
    }
};
