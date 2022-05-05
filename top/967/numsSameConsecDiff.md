## 967. 连续差相同的数字
```
返回所有长度为 n 且满足其每两个连续位上的数字之间的差的绝对值为 k 的 非负整数 。

请注意，除了 数字 0 本身之外，答案中的每个数字都 不能 有前导零。例如，01 有一个前导零，所以是无效的；但 0 是有效的。

你可以按 任何顺序 返回答案。

 

示例 1：

输入：n = 3, k = 7
输出：[181,292,707,818,929]
解释：注意，070 不是一个有效的数字，因为它有前导零。
示例 2：

输入：n = 2, k = 1
输出：[10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]
示例 3：

输入：n = 2, k = 0
输出：[11,22,33,44,55,66,77,88,99]
示例 4：

输入：n = 2, k = 2
输出：[13,20,24,31,35,42,46,53,57,64,68,75,79,86,97]
 

提示：

2 <= n <= 9
0 <= k <= 9
```

%

```js
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function (n, k) {
    // bt
    const ans = new Set();
    bt([], 0);
    return Array.from(ans);

    function bt(path, idx) {
        if (idx === n) {
            if (path[0] === 0) return;// 先导0
            const num = +path.join('')
            // if (ans.has(num)) return;// 去重，已经用Set了可去可不去，能省一次插入就省一次吧，话说查询和插入成本一样的吧，如果已经存在那个元素
            return ans.add(num);
        }

        if (path.length === 0) {
            for (let i = 0; i < 10; i++) {
                path.push(i);
                bt(path, idx + 1);
                path.pop();
            }
        } else {
            const pre = path[path.length - 1];
            const up = pre + k;
            const down = pre - k;
            if (up >= 0 && up < 10) {
                path.push(up);
                bt(path, idx + 1);
                path.pop();
            }

            if (down >= 0 && down < 10) {
                path.push(down);
                bt(path, idx + 1);
                path.pop();
            }
        }
    }
};
```

```js
// bfs
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function (n, k) {
    // bfs
    const q = Array(10).fill().map((_, idx) => [idx]);
    const ans = new Set();// 得去重
    while (q.length) {
        const cur = q.shift();
        if (cur.length === n) {
            if (cur[0] === 0) continue;// 先导0
            ans.add(+cur.join(''));
            continue;
        }
        const up = cur[cur.length - 1] + k,
            down = cur[cur.length - 1] - k;
        if (up < 10 && up >= 0) {
            q.push([...cur, up]);
        }

        if (down < 10 && down >= 0) {
            q.push([...cur, down])
        }
    }
    return Array.from(ans);
};
```