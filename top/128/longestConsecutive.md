## 128. 最长连续序列
```
给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

 

示例 1：

输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
示例 2：

输入：nums = [0,3,7,2,5,8,4,6,0,1]
输出：9
 

提示：

0 <= nums.length <= 105
-109 <= nums[i] <= 109
```

%

```js
// UnionSet
/**
 * @param {number[]} nums
 * @return {number}
 */
class UnionSet {
    constructor(n) {
        this.fa = Array(n)
            .fill()
            .map((_, idx) => idx);
        this.size = Array(n).fill(1);
    }

    get(x) {
        return (this.fa[x] = this.fa[x] === x ? x : this.get(this.fa[x]));
    }

    merge(a, b) {
        const ra = this.get(a),
            rb = this.get(b);
        if (ra === rb) return;
        this.size[rb] += this.size[ra];
        // console.log('merge', a, b, this.size[rb]);
        this.fa[ra] = rb;
    }
}
var longestConsecutive = function (nums) {
    const h = new Map(); // num->idx
    const n = nums.length;
    const u = new UnionSet(n);
    for (let i = 0; i < n; i++) {
        const num = nums[i];
        if (h.has(num)) continue;
        h.set(num, i);
        // console.log('check', num);
        // check num-1
        if (h.has(num - 1)) {
            u.merge(i, h.get(num - 1));
        }
        // check num+1
        if (h.has(num + 1)) {
            u.merge(i, h.get(num + 1));
        }
    }

    // 找到size最大的集合
    let ans = 0;
    for (let i = 0; i < n; i++) {
        if (u.get(i) === i && u.size[i] > ans) ans = u.size[i];
    }

    return ans;
};
```

```js
// Search + HashSet
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    // 起点是没有left相邻元素的元素
    const n = nums.length;
    const s = new Set(nums);

    let ans = 0;
    for (let i = 0; i < n; i++) {
        const num = nums[i];
        let curLen = 1;
        if (s.has(num - 1)) continue; // 不是开始的元素
        while (s.has(num + curLen)) {
            curLen += 1;
        }

        ans = Math.max(ans, curLen);

        if (ans > n / 2) break; // 已经找到长度大于一半的了，不可能再有更大的
    }
    return ans;
};
```