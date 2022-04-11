## 46. 全排列
```
给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

 

示例 1：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
示例 2：

输入：nums = [0,1]
输出：[[0,1],[1,0]]
示例 3：

输入：nums = [1]
输出：[[1]]
 

提示：

1 <= nums.length <= 6
-10 <= nums[i] <= 10
nums 中的所有整数 互不相同
```
%
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const n = nums.length;
    const ans = [];
    const selected = new Map();
    bt([]);
    return ans;

    function bt(path) {
        if (path.length === n) return ans.push(path.slice(0));

        for (let i = 0; i < nums.length; i++) {
            // select
            const cur = nums[i];
            if (selected.has(cur)) continue;
            path.push(cur);
            selected.set(cur);

            bt(path);

            path.pop();
            selected.delete(cur);
        }

    }
};
```