/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const n = nums.length;
    const ans = [];

    // const options = nums;

    bt([], nums);

    return ans;

    function bt(path, options) {
        if (path.length === n) {
            ans.push(path.slice(0)); // clone
            return;
        }

        for (let item of options) {
            if (path.includes(item)) {
                continue;
            }

            path.push(item); // 选择
            bt(path, options);
            path.pop(); // 撤销
        }
    }
};
