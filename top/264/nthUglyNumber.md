## 264. 丑数 II
```
给你一个整数 n ，请你找出并返回第 n 个 丑数 。

丑数 就是只包含质因数 2、3 和/或 5 的正整数。

 

示例 1：

输入：n = 10
输出：12
解释：[1, 2, 3, 4, 5, 6, 8, 9, 10, 12] 是由前 10 个丑数组成的序列。
示例 2：

输入：n = 1
输出：1
解释：1 通常被视为丑数。
 

提示：

1 <= n <= 1690
```

%

```js
class Heap {
    constructor(less) {
        this.data = [null];
        this.less = less;
    }

    insert(x) {
        this.data.push(x);
        this.swim();
    }

    swim() {
        let idx = this.data.length - 1;
        while (true) {
            const pid = idx >> 1;
            if (idx > 1 && this.less(this.data[idx], this.data[pid])) {
                this.swap(pid, idx);
                idx = pid;
            } else {
                break;
            }
        }
    }

    remove() {
        if (this.size() === 0) return;
        this.swap(1, this.data.length - 1);
        const ans = this.data.pop();
        this.sink();
        return ans;
    }

    sink() {
        let idx = 1;
        while (idx * 2 < this.data.length) {
            const leftIdx = idx * 2, rightIdx = leftIdx + 1;
            let tmp = idx;
            if (this.less(this.data[leftIdx], this.data[tmp])) tmp = leftIdx;
            if (rightIdx < this.data.length && this.less(this.data[rightIdx], this.data[tmp])) tmp = rightIdx;
            if (idx === tmp) break;
            this.swap(idx, tmp);
            idx = tmp;
        }
    }

    swap(i, j) {
        const tmp = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = tmp;
    }

    size() {
        return this.data.length - 1;
    }
}
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    // 把生成的数放进一个集合
    // 每次取出最小值，再生成，放入集合
    // 剪枝：当前数字只能乘以比最大质因数大的数字
    function less(a, b) {
        return a < b;
    }
    const h = new Heap(less);
    let ans = 0;
    h.insert(1);
    while (n--) {
        ans = h.remove();
        if (ans % 5 === 0) {
            h.insert(5 * ans);
        } else if (ans % 3 === 0) {
            h.insert(5 * ans);
            h.insert(3 * ans);
        } else {
            h.insert(5 * ans);
            h.insert(3 * ans);
            h.insert(2 * ans);
        }
    }

    return ans;
};
```