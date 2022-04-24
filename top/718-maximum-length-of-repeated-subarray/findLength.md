## 718. 最长重复子数组
```
给两个整数数组 nums1 和 nums2 ，返回 两个数组中 公共的 、长度最长的子数组的长度 。

 

示例 1：

输入：nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
输出：3
解释：长度最长的公共子数组是 [3,2,1] 。
示例 2：

输入：nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
输出：5
 

提示：

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 100
```
%
```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
    // dp[i][j] := 第i、j个数字位置结尾的最长子数组的长度
    // dp[i][j] = 1+dp[i-1][j-1] if nums1[i-1]===nums2[j-1]
    //             0
    // ans = max(dp[i][j])
    const m = nums1.length, n = nums2.length;

    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

    // base case
    // dp[0][..] = 0
    // dp[..][0] = 0

    let ans = 0;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
                ans = Math.max(ans, dp[i][j]);
            }

        }
    }
    return ans;
};
```