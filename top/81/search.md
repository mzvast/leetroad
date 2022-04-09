## 81. 搜索旋转排序数组 II
```
已知存在一个按非降序排列的整数数组 nums ，数组中的值不必互不相同。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转 ，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,4,4,5,6,6,7] 在下标 5 处经旋转后可能变为 [4,5,6,6,7,0,1,2,4,4] 。

给你 旋转后 的数组 nums 和一个整数 target ，请你编写一个函数来判断给定的目标值是否存在于数组中。如果 nums 中存在这个目标值 target ，则返回 true ，否则返回 false 。

你必须尽可能减少整个操作步骤。

 

示例 1：

输入：nums = [2,5,6,0,0,1,2], target = 0
输出：true
示例 2：

输入：nums = [2,5,6,0,0,1,2], target = 3
输出：false
 

提示：

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
题目数据保证 nums 在预先未知的某个下标上进行了旋转
-104 <= target <= 104
 

进阶：

这是 搜索旋转排序数组 的延伸题目，本题中的 nums  可能包含重复元素。
这会影响到程序的时间复杂度吗？会有怎样的影响，为什么？
```
%
```js
//二分
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    //  /|       
    // | | /|
    // |_|/_|

    // 二分
    // 分两层判断
    // 1、是在前半部分还是后半部分
    // 2、在子部分中继续判断
    const n = nums.length;
    let l = 0, r = nums.length - 1;
    if (nums[l] === target || nums[r] === target) return true;
    // 去除两端相等值
    while (l < n && nums[l] === nums[0]) l++;
    while (r >= 0 && nums[r] === nums[n - 1]) r--;

    // 最外层
    let head = l, tail = r;
    while (l <= r) {
        const mid = (l + r) >> 1;
        if (nums[mid] === target) return true;

        if (nums[mid] <= nums[tail]) {
            // 在后半段
            if (target <= nums[tail] && target > nums[mid]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        } else {
            // 在前半段
            if (target < nums[mid] && target >= nums[head]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
    }

    return false;
};
```