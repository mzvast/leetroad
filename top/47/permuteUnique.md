## 47. 全排列 II

```
给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。



示例 1：

输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]
示例 2：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]


提示：

1 <= nums.length <= 8
-10 <= nums[i] <= 10
```

%

```js
// https://www.youtube.com/watch?v=qhBVWf0YafA
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const n = nums.length;
    const h = {};
    for (let x of nums) h[x] = (h[x] || 0) + 1;

    const ans = [];
    bt([]);
    return ans;

    function bt(path) {
        if (path.length === n) {
            ans.push(path.slice());
            return;
        }

        for (let x in h) {
            if (h[x] > 0) {
                path.push(x);
                h[x]--;

                bt(path);

                path.pop();
                h[x]++;
            }
        }
    }
};
```
