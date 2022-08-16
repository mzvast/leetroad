## 560. 和为 K 的子数组
```
给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的连续子数组的个数 。

 

示例 1：

输入：nums = [1,1,1], k = 2
输出：2
示例 2：

输入：nums = [1,2,3], k = 3
输出：2
 

提示：

1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107
```

%

```js
// hashmap + prefixSum
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    // O(n) 
    const n = nums.length;
    let cnt = 0;

    let curSum = 0;
    const h = { 0: 1 };// prefixSum->cnt
    for (let i = 0; i < n; i++) {
        curSum += nums[i];
        if (h[curSum - k] !== undefined) cnt += h[curSum - k];
        h[curSum] = (h[curSum] ?? 0) + 1;
    }


    return cnt;
};
```