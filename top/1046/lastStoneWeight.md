## 1046. 最后一块石头的重量
```
有一堆石头，每块石头的重量都是正整数。

每一回合，从中选出两块 最重的 石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：

如果 x == y，那么两块石头都会被完全粉碎；
如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
最后，最多只会剩下一块石头。返回此石头的重量。如果没有石头剩下，就返回 0。

 

示例：

输入：[2,7,4,1,8,1]
输出：1
解释：
先选出 7 和 8，得到 1，所以数组转换为 [2,4,1,1,1]，
再选出 2 和 4，得到 2，所以数组转换为 [2,1,1,1]，
接着是 2 和 1，得到 1，所以数组转换为 [1,1,1]，
最后选出 1 和 1，得到 0，最终数组转换为 [1]，这就是最后剩下那块石头的重量。
 

提示：

1 <= stones.length <= 30
1 <= stones[i] <= 1000
```
%
```js
/**
 * @param {number[]} stones
 * @return {number}
 */
class MaxHeap {
    constructor() {
        this.data = [null];
    }

    insert(x) {
        this.data.push(x);
        this.swim();
    }

    swim() {
        let idx = this.data.length - 1;
        while (true) {
            let pid = idx >> 1;
            if (idx > 1 && this.data[pid] < this.data[idx]) {
                this.swap(pid, idx);
                idx = pid;
            } else {
                break;
            }
        }
    }

    remove(x) {
        if (this.data.length === 1) return;
        const ans = this.data[1];
        this.swap(1, this.data.length - 1);
        this.data.length -= 1;
        this.sink();
        return ans;
    }

    sink() {
        let idx = 1;
        while (2 * idx < this.data.length) {
            let leftIdx = 2 * idx, rightIdx = leftIdx + 1;
            let maxIdx = idx;
            if (this.data[maxIdx] < this.data[leftIdx]) maxIdx = leftIdx;
            if (rightIdx < this.data.length && this.data[maxIdx] < this.data[rightIdx]) maxIdx = rightIdx;
            if (maxIdx === idx) break;
            this.swap(maxIdx, idx);
            idx = maxIdx;
        }
    }

    swap(a, b) {
        let tmp = this.data[a];
        this.data[a] = this.data[b];
        this.data[b] = tmp;
    }

    size() {
        return this.data.length - 1;
    }
}
var lastStoneWeight = function (stones) {
    // 大顶堆
    const h = new MaxHeap();
    for (let x of stones) h.insert(x);
    while (h.size() > 1) {
        const a = h.remove(), b = h.remove();
         const left = a - b;
        if (left) h.insert(left);
    }

    return h.size() === 1 ? h.remove() : 0;
};
```