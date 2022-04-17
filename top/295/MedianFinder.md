## 295. 数据流的中位数
```
中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。

例如，

[2,3,4] 的中位数是 3

[2,3] 的中位数是 (2 + 3) / 2 = 2.5

设计一个支持以下两种操作的数据结构：

void addNum(int num) - 从数据流中添加一个整数到数据结构中。
double findMedian() - 返回目前所有元素的中位数。
示例：

addNum(1)
addNum(2)
findMedian() -> 1.5
addNum(3) 
findMedian() -> 2
进阶:

如果数据流中所有整数都在 0 到 100 范围内，你将如何优化你的算法？
如果数据流中 99% 的整数都在 0 到 100 范围内，你将如何优化你的算法？
```
%

```js
// 对顶堆
// 1 2 3     4 5 6
// MaxHeap + MinHeap
//  h1较小的值  h2较大的值
// 优先放入h1，多出来的调整到h2
// h1.length <= h2.length+1
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
            let pid = idx >> 1;
            if (idx > 1 && this.less(this.data[idx], this.data[pid])) {
                this.swap(idx, pid);
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

    top() {
        return this.data[1];
    }
}
var MedianFinder = function () {
    function less(a, b) {
        return a < b;
    }
    function large(a, b) {
        return a > b
    }
    this.h1 = new Heap(large);
    this.h2 = new Heap(less);
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    const { h1, h2 } = this;
    if (h1.size() === 0 || num <= h1.top()) {
        h1.insert(num);
    } else {
        h2.insert(num);
    }
    // 维护h1 h2的数量平衡，h1最多比h2多1个元素
    if (h2.size() > h1.size()) {
        h1.insert(h2.remove());
    }

    if (h1.size() === h2.size() + 2) {
        h2.insert(h1.remove());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    const { h1, h2 } = this;
    const n = h1.size() + h2.size();
    if (n % 2 === 1) return h1.top();
    return (h1.top() + h2.top()) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
```