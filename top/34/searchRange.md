## 34. 在排序数组中查找元素的第一个和最后一个位置
```
给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

进阶：

你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
 

示例 1：

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
示例 2：

输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
示例 3：

输入：nums = [], target = 0
输出：[-1,-1]
 

提示：

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums 是一个非递减数组
-109 <= target <= 109
```
%

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function binarySearch01(nums, target) {
    let head = 0, tail = nums.length - 1, mid;
    while (tail - head > 3) {
        mid = (head + tail) >> 1;
        if (nums[mid] >= target) tail = mid;
        else head = mid + 1;
    }
    // console.log('hhh', head, tail);
    for (let i = head; i <= tail; i++) {
        if (nums[i] === target) return i;
    }

    return -1;
}
function binarySearch02(nums, target) {
    let head = 0, tail = nums.length - 1, mid;
    while (tail - head > 3) {
        mid = (head + tail) >> 1;
        if (nums[mid] >= target) tail = mid;
        else head = mid + 1;
    }
    // console.log('hhh', head, tail);
    for (let i = head; i <= tail; i++) {
        if (nums[i] >= target) return i;
    }

    return nums.length;
}
var searchRange = function (nums, target) {
    // 起始位置 ==target
    // 结束位置 >=target+1的前一个位置

    const a1 = binarySearch01(nums, target);
    if (a1 === -1) return [-1, -1];
    const a2 = binarySearch02(nums, target + 1) - 1;
    return [a1, a2]


};
```