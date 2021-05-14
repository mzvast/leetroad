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
    if (nums.length === 0) return 0;
    const sumCountMap = new Map([[0, 1]]);
    // s -> count: how many arrays nums[0:j] (j < i) that has sum of s

    // 关键点
    // check how many prefix sums(j's) equals to sum - k
    // nums[0] + ... + nums[j] = sum - k;
    // then there are same number of j's that nums[j+1]+ ... + nums[i] = k;

    let cur_sum = 0; // sum(nums[0:i])
    let ans = 0;

    for (const num of nums) {
        cur_sum += num;

        ans += sumCountMap.get(cur_sum - k) || 0;

        const cur_sum_count = sumCountMap.get(cur_sum) || 0;
        sumCountMap.set(cur_sum, cur_sum_count + 1);
    }
    // console.log('sumCountMap', sumCountMap);

    return ans;
};

console.log(subarraySum([1, 1, 1], 2));
