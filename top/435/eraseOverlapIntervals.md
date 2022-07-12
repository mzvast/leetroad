## 435. 无重叠区间
```
给定一个区间的集合 intervals ，其中 intervals[i] = [starti, endi] 。返回 需要移除区间的最小数量，使剩余区间互不重叠 。

 

示例 1:

输入: intervals = [[1,2],[2,3],[3,4],[1,3]]
输出: 1
解释: 移除 [1,3] 后，剩下的区间没有重叠。
示例 2:

输入: intervals = [ [1,2], [1,2], [1,2] ]
输出: 2
解释: 你需要移除两个 [1,2] 来使剩下的区间没有重叠。
示例 3:

输入: intervals = [ [1,2], [2,3] ]
输出: 0
解释: 你不需要移除任何区间，因为它们已经是无重叠的了。
 

提示:

1 <= intervals.length <= 105
intervals[i].length == 2
-5 * 104 <= starti < endi <= 5 * 104
```

%

```js
// 贪心
// https://www.youtube.com/watch?v=nONCGxWoUfM
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    // greedy
    // 按照左端点进行排序 O(nlogn)
    intervals.sort((a, b) => a[0] < b[0] ? -1 : 1);

    let ans = 0,
        preEnd = intervals[0][1];

    for (let x of intervals.slice(1)/* 从第二个开始 */) {
        const [start, end] = x;
        // 重叠的话，留下结束早的
        if (start >= preEnd) {
            preEnd = end;
        } else {
            ans += 1;
            preEnd = Math.min(preEnd, end);
        }
    }

    return ans;
};
```