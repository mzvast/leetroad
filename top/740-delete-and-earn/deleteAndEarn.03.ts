/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
    // 选择了一个值，它相邻的分数就无法获得
    // 转换成house rob
    // [3,4,2] => rob[2,3,4]
    // [2,2,3,3,3,4] => rob[2*2, 3*3, 4]
    //

    // let robNums = []

    const min = Math.min.apply(null, nums),
        max = Math.max.apply(null, nums);

    let arr = Array(max + 1).fill(0);
    for (let i of nums) {
        arr[i] += i;
    }

    // console.log(robNums);

    return rob(arr.slice(min, max + 1));

    function rob(nums) {
        let n = nums.length;
        let dp2 = 0;
        let dp1 = 0;

        for (let i = 0; i < n; i++) {
            let dp = Math.max(dp2 + nums[i], dp1);
            dp2 = dp1;
            dp1 = dp;
        }
        // console.log(nums, dp)
        return dp1;
    }
};
