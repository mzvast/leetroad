## 16. 最接近的三数之和
```
给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

返回这三个数的和。

假定每组输入只存在恰好一个解。

 

示例 1：

输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
示例 2：

输入：nums = [0,0,0], target = 1
输出：0
 

提示：

3 <= nums.length <= 1000
-1000 <= nums[i] <= 1000
-104 <= target <= 104
```

%

```js
// 双指针
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    // 遍历a，bc用双指针
    const n = nums.length;
    // 排序
    nums.sort((a, b) => a < b ? -1 : 1);

    let ans = Infinity;
    for (let a = 0; a < n - 2; a++) {
        if (a > 0 && nums[a] === nums[a - 1]) { continue; }// 跳过相同的a
        // b初始位置a+1，用来增大
        // c初始位置n-1，用来减小
        let b = a + 1, c = n - 1;
        while (b < c) {
            const sum = nums[a] + nums[b] + nums[c];
            if (Math.abs(sum - target) < Math.abs(ans - target)) {
                ans = sum;
            }
            if (sum === target) {
                // 相等
                return sum;
            } else if (sum < target) {
                const left = b;
                b += 1;
                while (nums[left] === nums[b]) b += 1;
            } else if (sum > target) {
                const right = c;
                c -= 1;
                while (nums[right] === nums[c]) c -= 1;
            }
        }
    }

    return ans;
};
```