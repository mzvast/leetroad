## 1424. 对角线遍历 II
```
给你一个列表 nums ，里面每一个元素都是一个整数列表。请你依照下面各图的规则，按顺序返回 nums 中对角线上的整数。

 

示例 1：



输入：nums = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,4,2,7,5,3,8,6,9]
示例 2：



输入：nums = [[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]]
输出：[1,6,2,8,7,3,9,4,12,10,5,13,11,14,15,16]
示例 3：

输入：nums = [[1,2,3],[4],[5,6,7],[8],[9,10,11]]
输出：[1,4,2,5,3,8,6,9,7,10,11]
示例 4：

输入：nums = [[1,2,3,4,5,6]]
输出：[1,2,3,4,5,6]
 

提示：

1 <= nums.length <= 10^5
1 <= nums[i].length <= 10^5
1 <= nums[i][j] <= 10^9
nums 中最多有 10^5 个数字。
```

%

```js
// bfs
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function (nums) {
    // bfs
    const ans = [];

    const q = [[0, 0]];// tuple(i,j)

    while (q.length) {
        const len = q.length;
        for (let i = 0; i < len; i++) {
            const [i, j] = q.shift();
            ans.push(nums[i][j]);
            // down
            // 只看第一列
            if (j === 0 && nums[i + 1] && nums[i + 1][j]) q.push([i + 1, j]);

            // right
            if (nums[i] && nums[i][j + 1]) q.push([i, j + 1]);
        }
    }

    return ans;
};

```

```js
// hashmap思想
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function (nums) {
    

    const h = new Map(); // i+j=> []
    const total = nums.map((row) => row.length).reduce((pre, cur) => pre + cur);
    const ans = Array(total).fill(0);

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            if (!h.has(i + j)) {
                h.set(i + j, []);
            }
            h.get(i + j).push(nums[i][j]);
        }
    }
    // key的范围: 0~m-1+n-1
    let pre = 0;
    for (let i = 0; i < h.size; i++) {
        const cur = h.get(i);
        for (let j = cur.length - 1; j >= 0; j--) {
            ans[pre++] = cur[j]
        }
    }

    return ans;
};
```