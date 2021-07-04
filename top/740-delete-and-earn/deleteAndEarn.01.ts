/**
 * @param {number[]} nums
 * @return {number}
 */
//@ts-ignore
var deleteAndEarn = function (nums) {
    // 选择了一个值，它相邻的分数就无法获得
    // 转换成house rob
    // [3,4,2] => rob[2,3,4]
    // [2,2,3,3,3,4] => rob[2*2, 3*3, 4]
    //

    let robNums = [];
    let numSumMap = {};
    const min = Math.min.apply(null, nums),
        max = Math.max.apply(null, nums);

    for (let i = min; i <= max; i++) {
        numSumMap[i] = 0;
    }

    for (let i of nums) {
        numSumMap[i] += i;
    }

    robNums = Object.keys(numSumMap).map((i) => numSumMap[i]);

    // console.log(robNums);

    return rob(robNums);

    function rob(nums) {
        let n = nums.length;
        let dp = Array(n + 1).fill(0);
        for (let i = 0; i < n; i++) {
            dp[i] = Math.max(
                (i > 1 ? dp[i - 2] : 0) + nums[i],
                i > 0 ? dp[i - 1] : 0
            );
        }
        // console.log(nums, dp)
        return dp[n - 1];
    }
};
