## 1438. 绝对差不超过限制的最长连续子数组
```
给你一个整数数组 nums ，和一个表示限制的整数 limit，请你返回最长连续子数组的长度，该子数组中的任意两个元素之间的绝对差必须小于或者等于 limit 。

如果不存在满足条件的子数组，则返回 0 。

 

示例 1：

输入：nums = [8,2,4,7], limit = 4
输出：2 
解释：所有子数组如下：
[8] 最大绝对差 |8-8| = 0 <= 4.
[8,2] 最大绝对差 |8-2| = 6 > 4. 
[8,2,4] 最大绝对差 |8-2| = 6 > 4.
[8,2,4,7] 最大绝对差 |8-2| = 6 > 4.
[2] 最大绝对差 |2-2| = 0 <= 4.
[2,4] 最大绝对差 |2-4| = 2 <= 4.
[2,4,7] 最大绝对差 |2-7| = 5 > 4.
[4] 最大绝对差 |4-4| = 0 <= 4.
[4,7] 最大绝对差 |4-7| = 3 <= 4.
[7] 最大绝对差 |7-7| = 0 <= 4. 
因此，满足题意的最长子数组的长度为 2 。
示例 2：

输入：nums = [10,1,2,4,7,2], limit = 5
输出：4 
解释：满足题意的最长子数组是 [2,4,7,2]，其最大绝对差 |2-7| = 5 <= 5 。
示例 3：

输入：nums = [4,2,2,2,4,4,2,2], limit = 0
输出：3
 

提示：

1 <= nums.length <= 10^5
1 <= nums[i] <= 10^9
0 <= limit <= 10^9
```
%
```js
// 正常写法，但会TLE
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
    // 最值
    // 滑动窗口+单调队列
    const n = nums.length;
    let l = r = 0;


    // 存idx
    const qMax = [],// 单调递减 |\
        qMin = [];// 单调递增   /|

    let ans = 0;// 最长的满足条件的子数组长度

    while (r < n) {
        const toAdd = r;

        // 入队
        // qMax
        while (qMax.length && nums[back(qMax)] < nums[toAdd]) qMax.pop();
        qMax.push(toAdd);
        // qMin
        while (qMin.length && nums[back(qMin)] > nums[toAdd]) qMin.pop();
        qMin.push(toAdd);

        // shrink window
        while (qMax.length && qMin.length &&
            nums[front(qMax)] - nums[front(qMin)] > limit) {
            const toDel = l;
            l++;
            if (front(qMax) === toDel) qMax.shift();
            if (front(qMin) === toDel) qMin.shift();
        }

        // update ans
        ans = Math.max(ans, r - l + 1);
        r++;
    }

    return ans;

    function front(stack) {
        return stack[0]
    }

    function back(stack) {
        return stack[stack.length - 1]
    }
};
```

```js
// 优化LTE
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
    // 最值
    // 滑动窗口+单调队列
    const n = nums.length;
    let l = r = 0;


    // 存idx
    const qMax = [],// 单调递减 |\
        qMin = [];// 单调递增   /|
    let qMaxStart = qMinStart = 0;// 起始位置，避免频繁shift调整后续元素造成TLE

    let ans = 0;// 最长的满足条件的子数组长度

    while (r < n) {
        const toAdd = r;

        // 入队
        // qMax
        while ((qMax.length - qMaxStart) && nums[back(qMax)] < nums[toAdd]) qMax.pop();
        qMax.push(toAdd);
        // qMin
        while ((qMin.length - qMinStart) && nums[back(qMin)] > nums[toAdd]) qMin.pop();
        qMin.push(toAdd);

        // shrink window
        while ((qMax.length - qMaxStart) && (qMin.length - qMinStart) &&
            nums[front(qMax, qMaxStart)] - nums[front(qMin, qMinStart)] > limit) {
            const toDel = l;
            l++;
            if (front(qMax, qMaxStart) === toDel) qMaxStart += 1;//qMax.shift();
            if (front(qMin, qMinStart) === toDel) qMinStart += 1;//qMin.shift();
        }

        // update ans
        ans = Math.max(ans, r - l + 1);
        r++;
    }

    return ans;

    function front(stack, startIdx) {
        return stack[startIdx]
    }

    function back(stack) {
        return stack[stack.length - 1]
    }
};
```

```js
// 二分+滑动窗口
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {

    return binarySearch10(0, nums.length);

    function back(stack) {
        return stack[stack.length - 1];
    }

    function front(stack) {
        return stack[0]
    }

    function check(k) {
        let qMax = [],// |\
            qMin = [];// /|
        for (let i = 0; i < nums.length; i++) {
            // 入队
            while (qMax.length && nums[back(qMax)] < nums[i]) qMax.pop();
            qMax.push(i);
            while (qMin.length && nums[back(qMin)] > nums[i]) qMin.pop();
            qMin.push(i);

            // 出队
            if (i - front(qMax) === k) qMax.shift();
            if (i - front(qMin) === k) qMin.shift();
            if (i + 1 < k) continue;
            if (nums[front(qMax)] - nums[front(qMin)] <= limit) return true;
        }
        return false;
    }
    function binarySearch10(head, tail) {
        if (head === tail) return head;
        const mid = (head + tail + 1) >> 1;
        if (check(mid)) head = mid;
        else tail = mid - 1;
        return binarySearch10(head, tail);
    }
};
```