## 41. 缺失的第一个正数
```
给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。

请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
 

示例 1：

输入：nums = [1,2,0]
输出：3
示例 2：

输入：nums = [3,4,-1,1]
输出：2
示例 3：

输入：nums = [7,8,9,11,12]
输出：1
 

提示：

1 <= nums.length <= 5 * 105
-231 <= nums[i] <= 231 - 1
```
%
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    // 下标i存放数字i+1
    // nums[i] = i+1
    // ...
    // ans = 第一个违反规则的下标+1

    const n = nums.length;

    for (let i = 0; i < n; i++) {
        while (nums[i] !== i + 1) { // 把i位置的数字放到正确的位置上去
            const idx = nums[i] - 1;// 正确位置
            if (idx < 0 || idx >= n) break; // 越界
            if (nums[i] === nums[idx]) break; // 防止诸如 [1,1] 的情况死循环
            swap(i, idx);
        }
    }

    let i = -1;
    while (++i < n) if (nums[i] !== i + 1) break;
    return i + 1;


    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
};
```