## 673. 最长递增子序列的个数
```
给定一个未排序的整数数组 nums ， 返回最长递增子序列的个数 。

注意 这个数列必须是 严格 递增的。

 

示例 1:

输入: [1,3,5,4,7]
输出: 2
解释: 有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。
示例 2:

输入: [2,2,2,2,2]
输出: 5
解释: 最长递增子序列的长度是1，并且存在5个子序列的长度为1，因此输出5。
 

提示: 

1 <= nums.length <= 2000
-106 <= nums[i] <= 106
```

%
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
    // dp[i] := 第i个元素构成的LIS
    // dp[i] = 1+max(dp[j]) (nums[j]<nums[i],0<j<i)
    // ans 最长的个数

    let ans = 0, maxLen = 0;

    const n = nums.length;
    const dp = Array(n).fill(1);
    const cnt = Array(n).fill(1);
    // base case
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (1 + dp[j] > dp[i]) {
                    dp[i] = 1 + dp[j];
                    cnt[i] = cnt[j]; // 重置
                } else if (1 + dp[j] === dp[i]) {
                    cnt[i] += cnt[j];
                }
            }
        }

        if (dp[i] > maxLen) {
            maxLen = dp[i];
            ans = cnt[i]; // 重置计数
        } else if (dp[i] === maxLen) {
            ans += cnt[i];
        }


    }


    return ans;
};
```