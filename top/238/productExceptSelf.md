## 238. 除自身以外数组的乘积
```
给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。

题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

请不要使用除法，且在 O(n) 时间复杂度内完成此题。

 

示例 1:

输入: nums = [1,2,3,4]
输出: [24,12,8,6]
示例 2:

输入: nums = [-1,1,0,-3,3]
输出: [0,0,9,0,0]
 

提示：

2 <= nums.length <= 105
-30 <= nums[i] <= 30
保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内
 

进阶：你可以在 O(1) 的额外空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）
```

%
```js
// O(n) + O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const n = nums.length;


    const ans = Array(n);
    // prefix  
    let product = 1;
    for (let i = 0; i < n; i++) {
        ans[i] = product;
        product *= nums[i];
    }
    // postfix 
    product = 1;
    for (let i = n - 1; i >= 0; i--) {
        ans[i] = ans[i] * product;
        product *= nums[i];
    }
    return ans;
};
```


```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const n = nums.length;


    const ans = Array(n);

    // l product
    const l = Array(n + 1).fill(1);
    for (let i = 1; i <= n; i++) l[i] = l[i - 1] * nums[i - 1];
    // r product
    const r = Array(n + 1).fill(1);
    for (let i = n - 2; i >= 0; i--) r[i] = r[i + 1] * nums[i + 1];

    for (let i = 0; i < n; i++) ans[i] = l[i] * r[i];
    
    return ans;
};
```