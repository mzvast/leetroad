## 162. 寻找峰值

```
峰值元素是指其值严格大于左右相邻值的元素。

给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。

你可以假设 nums[-1] = nums[n] = -∞ 。

你必须实现时间复杂度为 O(log n) 的算法来解决此问题。



示例 1：

输入：nums = [1,2,3,1]
输出：2
解释：3 是峰值元素，你的函数应该返回其索引 2。
示例 2：

输入：nums = [1,2,1,3,5,6,4]
输出：1 或 5
解释：你的函数可以返回索引 1，其峰值元素为 2；
     或者返回索引 5， 其峰值元素为 6。


提示：

1 <= nums.length <= 1000
-231 <= nums[i] <= 231 - 1
对于所有有效的 i 都有 nums[i] != nums[i + 1]
```

%

```js
// 二分法
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    const n = nums.length;

    // 二分法

    return bs(0, n - 1);

    function bs(head, tail) {
        while (head < tail) {
            const mid = (head + tail) >> 1;
            //    /|
            //   / |
            // mid mid+1
            if (nums[mid] < nums[mid + 1]) {
                head = mid + 1;
            } else {
                tail = mid;
            }
            //   |\
            //   | \
            // mid mid+1
        }

        return head;
    }
};
```

O(n)的实现，单调栈。能做但不满足题目 O(log n)的要求

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    // 第i个元素，比左右都要大

    const n = nums.length;
    // 虚拟位置-1，n
    const l = Array(n).fill(-1); // 左边第一个比当前位置小的元素下标
    const r = Array(n).fill(n); // 右边第一个比当前位置小的元素下标
    const s = []; // 单调递增栈,存元素下标
    //  /|
    // / |

    for (let i = 0; i < n; i++) {
        while (s.length && nums[i] < nums[s[s.length - 1]]) {
            r[s[s.length - 1]] = i;
            s.pop();
        }
        if (s.length > 0) l[i] = s[s.length - 1];
        s.push(i);
        // check ans
        // l[i] i r[i]
    }

    for (let i = 0; i < n; i++) {
        if (l[i] + 1 === i && i + 1 === r[i]) return i;
    }
};
```
