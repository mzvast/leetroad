## 347. 前 K 个高频元素
```
给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。

 

示例 1:

输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
示例 2:

输入: nums = [1], k = 1
输出: [1]
 

提示：

1 <= nums.length <= 105
k 的取值范围是 [1, 数组中不相同的元素的个数]
题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的
 

进阶：你所设计算法的时间复杂度 必须 优于 O(n log n) ，其中 n 是数组大小。
```

%

```js
// 直接统计
// https://neetcode.io/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const dict = {}; // num->cnt
    const freqValMap = Array.from({ length: nums.length + 1 }, () => []); // f->num[]

    for (let x of nums) {
        dict[x] = (dict[x] ?? 0) + 1;
    }

    for (let x in dict) {
        freqValMap[dict[x]].push(x);
    }
    let ans = [];
    for (let i = freqValMap.length - 1; i >= 0; i--) {
        if (freqValMap[i].length > 0) {
            for (let x of freqValMap[i]) {
                if (ans.length === k) return ans;
                ans.push(x);
            }
        }
    }
    return ans;
};
```

```js
// 排序
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = new Map(); // num->cnt

    for (let x of nums) {
        map.set(x, (map.get(x) ?? 0) + 1)
    }

    // console.log(map);

    return Array.from(map).sort((a, b) => a[1] > b[1] ? -1 : 1).map((item) => item[0]).slice(0, k);// 从大到小
};
```