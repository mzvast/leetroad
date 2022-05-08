## 327. 区间和的个数
```
给你一个整数数组 nums 以及两个整数 lower 和 upper 。求数组中，值位于范围 [lower, upper] （包含 lower 和 upper）之内的 区间和的个数 。

区间和 S(i, j) 表示在 nums 中，位置从 i 到 j 的元素之和，包含 i 和 j (i ≤ j)。

 

示例 1：
输入：nums = [-2,5,-1], lower = -2, upper = 2
输出：3
解释：存在三个区间：[0,0]、[2,2] 和 [0,2] ，对应的区间和分别是：-2 、-1 、2 。
示例 2：

输入：nums = [0], lower = 0, upper = 0
输出：1
 

提示：

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
-105 <= lower <= upper <= 105
题目数据保证答案是一个 32 位 的整数
```

%

```js
// 前缀和+归并排序
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function (nums, lower, upper) {
    // 问题转换成求满足 lower<=sum[j]-sum[i]<=upper 的i,j区间个数
    // 可以在归并排序的过程中逐段求解，累加

    const n = nums.length;
    const sum = Array(n + 1).fill(0);
    const tmp = Array(n + 1);
    for (let i = 0; i < n; i++) sum[i + 1] = sum[i] + nums[i];

    return mergeSort(0, sum.length - 1);

    function mergeSort(l, r) {
        if (l >= r) return 0;
        const mid = (l + r) >> 1;
        let ans = 0;
        ans += mergeSort(l, mid);
        ans += mergeSort(mid + 1, r);
        ans += countTowPart(l, mid, mid + 1, r);

        // 合并两个有序数组
        let p1 = l, p2 = mid + 1, k = l;
        while (p1 <= mid || p2 <= r) {
            if (p2 > r || (p1 <= mid && sum[p1] <= sum[p2])) {
                tmp[k++] = sum[p1++];
            } else {
                tmp[k++] = sum[p2++];
            }
        }
        // copy to sum
        for (let i = l; i <= r; i++) sum[i] = tmp[i];
        return ans;
    }

    function countTowPart(l1, r1, l2, r2) {
        // lower<=sum[j]-sum[i]<=upper
        // a=sum[j]-upper<=sum[i]<= sum[j] - lower=b

        let ans = 0;

        let k1 = k2 = l1;// [k1,k2)满足条件的i范围
        // 扫描右边所有的j
        for (let j = l2; j <= r2; j++) {
            const a = sum[j] - upper, b = sum[j] - lower;
            while (k1 <= r1 && sum[k1] < a) k1 += 1;
            while (k2 <= r1 && sum[k2] <= b) k2 += 1;// 第一个大于k2的位置
            ans += k2 - k1;
        }
        return ans;
    }
};
```