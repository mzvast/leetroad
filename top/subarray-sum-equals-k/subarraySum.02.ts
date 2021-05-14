// 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。

// 示例 1 :

// 输入:nums = [1,1,1], k = 2
// 输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/subarray-sum-equals-k
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let result = 0;
    const prefixSum = Array(nums.length + 1).fill(0);
    // 生成前缀和
    for (let i = 1; i <= nums.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
    }
    // console.log('prefixSum', prefixSum);
    // O(n^2)
    for (let i = 0; i < prefixSum.length; i++) {
        for (let j = i + 1; j < prefixSum.length; j++) {
            const diff = prefixSum[j] - prefixSum[i];
            // console.log('diff::', prefixSum[j], '-', prefixSum[i], '=', diff);
            if (diff === k) {
                result++;
            }
        }
    }
    return result;
};

console.log(subarraySum([1, 1, 1], 2));
