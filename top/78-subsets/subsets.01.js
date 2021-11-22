/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    // backtrace

    const n = nums.length;
    const options = [0, 1];
    const ans = [];
    bt([], options);
    return ans;

    // options: 选 or 不选
    function bt(path, options) {
        // console.log(path, options);
        if (path.length === n) {
            // 处理结果
            const cur = nums.filter((item, idx) => path[idx]);
            ans.push(cur);
            return;
        }

        for (let opt of options) {
            path.push(opt); // 选择
            bt(path, options);
            path.pop(); // 撤销选择
        }
    }
};
