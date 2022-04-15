## 84. 柱状图中最大的矩形
```
给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。

 

示例 1:



输入：heights = [2,1,5,6,2,3]
输出：10
解释：最大的矩形为图中红色区域，面积为 10
示例 2：



输入： heights = [2,4]
输出： 4
 

提示：

1 <= heights.length <=105
0 <= heights[i] <= 104
```

%

```js
// 单调栈
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    // 求每一个元素前一个比他小的下标a和后一个比他小的元素的下标b
    // S = 本身的高度* (b-a+1)
    // 虚拟位置-1，n
    const n = heights.length;
    const s = []; // 单调增 /|
    const l = Array(n);
    const r = Array(n);
    for (let i = 0; i < n; i++) l[i] = -1, r[i] = n;

    for (let i = 0; i < n; i++) {
        // 对于重复元素 2 3 3 3 2
        // 牺牲男神的准确性，确保女神的准确性，不影响答案
        while (s.length > 0 && heights[i] <= heights[s[s.length - 1]]) {
            r[s[s.length - 1]] = i;// i是栈顶元素的男神
            s.pop();
        }
        if (s.length > 0) l[i] = s[s.length - 1];
        // 女神
        s.push(i);


    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans = Math.max(ans, heights[i] * (r[i] - l[i] - 1))
    }
    return ans;
};
```