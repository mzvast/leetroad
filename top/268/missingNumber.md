## 268. 丢失的数字
```
给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。

 

示例 1：

输入：nums = [3,0,1]
输出：2
解释：n = 3，因为有 3 个数字，所以所有的数字都在范围 [0,3] 内。2 是丢失的数字，因为它没有出现在 nums 中。
示例 2：

输入：nums = [0,1]
输出：2
解释：n = 2，因为有 2 个数字，所以所有的数字都在范围 [0,2] 内。2 是丢失的数字，因为它没有出现在 nums 中。
示例 3：

输入：nums = [9,6,4,2,3,5,7,0,1]
输出：8
解释：n = 9，因为有 9 个数字，所以所有的数字都在范围 [0,9] 内。8 是丢失的数字，因为它没有出现在 nums 中。
示例 4：

输入：nums = [0]
输出：1
解释：n = 1，因为有 1 个数字，所以所有的数字都在范围 [0,1] 内。1 是丢失的数字，因为它没有出现在 nums 中。
 

提示：

n == nums.length
1 <= n <= 104
0 <= nums[i] <= n
nums 中的所有数字都 独一无二
 

进阶：你能否实现线性时间复杂度、仅使用额外常数空间的算法解决此问题?
```

%

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    // 下标i应该存的数字是i
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        while (nums[i] !== i) {
            const v = nums[i];// i位置的数字应该出现的位置
            if (v < 0 || v >= n) break; // 越界
            if (nums[v] === nums[i]) break;// 换过去的值和当前值相等，死循环
            swap(i, v);
        }
    }
    // console.log(nums);
    let i = 0
    for (; i < n; i++) {
        if (nums[i] !== i) return i;
    }
    return i;
    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
};
```