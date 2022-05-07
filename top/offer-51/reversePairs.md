## 剑指 Offer 51. 数组中的逆序对
```
在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。

 

示例 1:

输入: [7,5,6,4]
输出: 5
 

限制：

0 <= 数组长度 <= 50000
```

%

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
    // 归并排序
    const n = nums.length;
    const tmp = Array(n);
    return countResult(nums, 0, n - 1);

    function countResult(nums, l, r) {
        if (l >= r) return 0;
        let ans = 0;
        const mid = (l + r) >> 1;
        ans += countResult(nums, l, mid);
        ans += countResult(nums, mid + 1, r);
        // merge
        let k = l, p1 = l, p2 = mid + 1;
        while (p1 <= mid || p2 <= r) {
            if (p2 > r || (p1 <= mid && nums[p1] <= nums[p2])) {
                tmp[k++] = nums[p1++];
            } else {
                tmp[k++] = nums[p2++];
                ans += (mid - p1 + 1);
            }
        }

        for (let i = l; i <= r; i++) nums[i] = tmp[i];

        return ans;
    }
};
```