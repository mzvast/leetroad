## 15. 三数之和
```
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
示例 2：

输入：nums = []
输出：[]
示例 3：

输入：nums = [0]
输出：[]
 

提示：

0 <= nums.length <= 3000
-105 <= nums[i] <= 105

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```
%
```js
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
```