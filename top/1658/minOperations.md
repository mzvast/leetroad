## 1658. 将 x 减到 0 的最小操作数
```
给你一个整数数组 nums 和一个整数 x 。每一次操作时，你应当移除数组 nums 最左边或最右边的元素，然后从 x 中减去该元素的值。请注意，需要 修改 数组以供接下来的操作使用。

如果可以将 x 恰好 减到 0 ，返回 最小操作数 ；否则，返回 -1 。

 

示例 1：

输入：nums = [1,1,4,2,3], x = 5
输出：2
解释：最佳解决方案是移除后两个元素，将 x 减到 0 。
示例 2：

输入：nums = [5,6,7,8,9], x = 4
输出：-1
示例 3：

输入：nums = [3,2,20,1,1,3], x = 10
输出：5
解释：最佳解决方案是移除后三个元素和前两个元素（总共 5 次操作），将 x 减到 0 。
 

提示：

1 <= nums.length <= 105
1 <= nums[i] <= 104
1 <= x <= 109
```
%
```js
// 前缀和+二分
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
    const n = nums.length;
    const sumL = Array(n + 1).fill(0);
    const sumR = Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) sumL[i] = sumL[i - 1] + nums[i - 1];
    // for (let i = n - 1; i >= 0; i--) sumR[i] = sumR[i + 1] + nums[i];
    // sumR.reverse();
    //      i
    // j
    // j+i=n
    for (let i = n - 1; i >= 0; i--) {
        let j = n - i;
        sumR[j] = sumR[j - 1] + nums[i];
    }

    let ans = Infinity;
    for (let i = 0; i < sumL.length; i++) {
        const j = binarySearch(sumR, x - sumL[i]);// sumR.indexOf(x - sumL[i]);
        if (j === -1) continue;
        if (i + j > n) continue;
        else {
            ans = Math.min(ans, i + j)
        }
    }
    return ans === Infinity ? -1 : ans;

    function binarySearch(nums, x) {
        let head = 0, tail = nums.length, mid;
        while (tail - head > 3) {
            mid = (head + tail) >> 1;
            if (nums[mid] >= x) tail = mid;
            else head = mid + 1;
        }

        for (let i = head; i <= tail; i++) {
            if (nums[i] === x) return i;
        }

        return -1;
    }
};
```