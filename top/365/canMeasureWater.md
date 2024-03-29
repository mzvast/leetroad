## 365. 水壶问题
```
有两个水壶，容量分别为 jug1Capacity 和 jug2Capacity 升。水的供应是无限的。确定是否有可能使用这两个壶准确得到 targetCapacity 升。

如果可以得到 targetCapacity 升水，最后请用以上水壶中的一或两个来盛放取得的 targetCapacity 升水。

你可以：

装满任意一个水壶
清空任意一个水壶
从一个水壶向另外一个水壶倒水，直到装满或者倒空
 

示例 1: 

输入: jug1Capacity = 3, jug2Capacity = 5, targetCapacity = 4
输出: true
解释：来自著名的 "Die Hard"
示例 2:

输入: jug1Capacity = 2, jug2Capacity = 6, targetCapacity = 5
输出: false
示例 3:

输入: jug1Capacity = 1, jug2Capacity = 2, targetCapacity = 3
输出: true
 

提示:

1 <= jug1Capacity, jug2Capacity, targetCapacity <= 106
```
%
```js
// BFS
/**
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
var canMeasureWater = function (jug1Capacity, jug2Capacity, targetCapacity) {

    const visited = new Map();// x-y
    const q = [];

    q.push([0, 0]);

    while (q.length) {
        const cur = q.shift();
        if (cur[0] + cur[1] === targetCapacity) return true;
        for (let i = 0; i < 6; i++) {
            const next = getNext(i, cur[0], jug1Capacity, cur[1], jug2Capacity);
            const key = `${next[0]}-${next[1]}`;
            if (visited.has(key)) continue;
            visited.set(key, true);
            q.push(next);

        }
    }

    return false;

    function getNext(k, x, X, y, Y,) {
        switch (k) {
            case 0: {
                // 倒满第一个
                return [X, y]
            };
            case 1: {
                // 倒满第二个
                return [x, Y];
            };
            case 2: {
                // 清空第一个
                return [0, y];
            }
            case 3: {
                // 清空第二个
                return [x, 0];
            };
            case 4: {
                // 第一个倒入第二个
                const out = Math.min(x, Y - y);
                return [x - out, y + out];
            }
            case 5: {
                // 第二个倒入第一个
                const out = Math.min(y, X - x);
                return [x + out, y - out];
            }
        }
    }
};
```