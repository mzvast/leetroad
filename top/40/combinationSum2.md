## 40. 组合总和 II
```
给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用 一次 。

注意：解集不能包含重复的组合。 

 

示例 1:

输入: candidates = [10,1,2,7,6,1,5], target = 8,
输出:
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
示例 2:

输入: candidates = [2,5,2,1,2], target = 5,
输出:
[
[1,2,2],
[5]
]
 

提示:

1 <= candidates.length <= 100
1 <= candidates[i] <= 50
1 <= target <= 30
```

%

```js
// https://www.youtube.com/watch?v=rSA3t6BDDwg
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    // bt

    // 先排序
    const n = candidates.length;
    candidates.sort((a, b) => a < b ? -1 : 1);
    const ans = [];

    bt([], 0, target)
    return ans;
    function bt(path, idx, target) {
        if (target === 0) ans.push(path.slice())
        if (target <= 0) return;

        let prev = -1;// 上一次用过的值
        for (let i = idx; i < n; i++) {
            if (candidates[i] === prev) continue;// 跳过同样的值
            // select
            path.push(candidates[i]);
            // bt
            bt(path, i + 1, target - candidates[i]);
            // revert
            path.pop();
            prev = candidates[i];
        }

    }
};
```