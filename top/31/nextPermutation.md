## 31. 下一个排列
```
整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。

例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。

例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
给你一个整数数组 nums ，找出 nums 的下一个排列。

必须 原地 修改，只允许使用额外常数空间。

 

示例 1：

输入：nums = [1,2,3]
输出：[1,3,2]
示例 2：

输入：nums = [3,2,1]
输出：[1,2,3]
示例 3：

输入：nums = [1,1,5]
输出：[1,5,1]
 

提示：

1 <= nums.length <= 100
0 <= nums[i] <= 100
```

%

```js
// https://www.youtube.com/watch?v=K-QCteGM-Bk
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    // 1、从右往左找到第一个降序的位置A，如果找不到，则直接reverse
    // 2、在右往左找到第一个比A大的数B，swap A和B
    // 3、对A右边进行排序

    const n = nums.length;

    let i = n - 2;
    for (; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) break;
    }
    // 找不到逆序的
    if (i === -1) {
        nums.reverse();
        return;
    }

    let j = n - 1
    for (; j > i; j--) {
        if (nums[j] > nums[i]) break;
    }

    swap(i, j);

    reverse(i + 1, n - 1);

    return;


    function reverse(i, j) {
        while (i < j) {
            swap(i++, j--);
        }
    }


    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
};
```