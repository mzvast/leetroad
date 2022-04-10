## 4. 寻找两个正序数组的中位数
```
给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

算法的时间复杂度应该为 O(log (m+n)) 。

 

示例 1：

输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2
示例 2：

输入：nums1 = [1,2], nums2 = [3,4]
输出：2.50000
解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
 

 

提示：

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
```
%
```js
// 二分
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // [a0,a1/..am]
    // [b0,b1/..bn]
    // 各取前k/2比较（总k个），扣掉前k/2个元素，问题规模缩小一半。
    const m = nums1.length,
        n = nums2.length,
        mid = (m + n + 1) >> 1;// 中位数的排名 [1..]
    // 奇数个
    let a = findK(0, 0, mid);
    if ((m + n) % 2 === 1) return a;
    let b = findK(0, 0, mid + 1);
    return (a + b) / 2;

    function findK(i, j, k) {
        // edge cases
        // empty
        if (i === m) return nums2[j + k - 1];
        if (j === n) return nums1[i + k - 1];
        // last one
        if (k === 1) return nums1[i] < nums2[j] ? nums1[i] : nums2[j];

        let a = Math.min(k >> 1, m - 1 - i + 1);
        let b = Math.min(k - a, n - 1 - j + 1);
        a = k - b;

        // compare 
        if (nums1[i + a - 1] <= nums2[j + b - 1]) {
            // a所在的位置及之前的位置属于前k个中的a个，扣除
            return findK(i + a - 1 + 1, j, k - a);
        }
        // b所在的位置及其之前的位置属于前k个中的b个，扣除
        return findK(i, j + b - 1 + 1, k - b);



    }
};
```