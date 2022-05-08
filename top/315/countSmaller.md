## 315. 计算右侧小于当前元素的个数
```
给你一个整数数组 nums ，按要求返回一个新数组 counts 。数组 counts 有该性质： counts[i] 的值是  nums[i] 右侧小于 nums[i] 的元素的数量。

 

示例 1：

输入：nums = [5,2,6,1]
输出：[2,1,1,0] 
解释：
5 的右侧有 2 个更小的元素 (2 和 1)
2 的右侧仅有 1 个更小的元素 (1)
6 的右侧有 1 个更小的元素 (1)
1 的右侧有 0 个更小的元素
示例 2：

输入：nums = [-1]
输出：[0]
示例 3：

输入：nums = [-1,-1]
输出：[0,0]
 

提示：

1 <= nums.length <= 105
-104 <= nums[i] <= 104
```

%

```js
// 归并排序
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
    // nums[i]<nums[j]
    const n = nums.length;
    const arr = Array(n).fill().map((_, i) => [nums[i], i, 0]);// 打包数据[val,idx,cnt]
    const tmp = Array(n);
    mergeSort(0, n - 1);
    const ans = Array(n);
    for (let i = 0; i < arr.length; i++) ans[arr[i][1]] = arr[i][2]
    return ans;

    function mergeSort(l, r) {
        if (l >= r) return;
        let ans = 0;
        const mid = (l + r) >> 1;
        mergeSort(l, mid);
        mergeSort(mid + 1, r);

        // 合并有序数组
        let p1 = l, p2 = mid + 1, k = l;
        while (p1 <= mid || p2 <= r) {
            if (p2 > r || (p1 <= mid && arr[p1][0] > arr[p2][0])) {
                // 从大到小排，p1比p2大则p1比p2右边的都大
                arr[p1][2] += r - p2 + 1;
                tmp[k++] = arr[p1++];
            } else {
                tmp[k++] = arr[p2++];
            }
        }
        for (let i = l; i <= r; i++) arr[i] = tmp[i];
        return ans;
    }


};
```