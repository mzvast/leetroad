## 剑指 Offer 40. 最小的k个数
```
输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

 

示例 1：

输入：arr = [3,2,1], k = 2
输出：[1,2] 或者 [2,1]
示例 2：

输入：arr = [0,1,2,1], k = 1
输出：[0]
 

限制：

0 <= k <= arr.length <= 10000
0 <= arr[i] <= 10000
```
%
```js
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
class MinHeap {
    constructor() {
        this.data = [null];
    }

    insert(x) {
        this.data.push(x);
        this.swim();
    }
    // 向上
    swim() {
        let idx = this.data.length - 1;
        while (idx > 1 && this.data[idx >> 1] > this.data[idx]) {
            this.swap(idx, idx >> 1);
            idx = idx >> 1;
        }
    }
    // 向下
    sink() {
        let idx = 1;
        while (idx * 2 < this.data.length) {
            let tmp = idx;
            if (this.data[tmp] > this.data[idx * 2]) tmp = idx * 2;
            if (idx * 2 + 1 < this.data.length && this.data[tmp] > this.data[idx * 2 + 1]) tmp = idx * 2 + 1;
            if (tmp === idx) break;
            this.swap(tmp, idx);
            idx = tmp;
        }
    }

    remove() {
        if (this.size() === 0) return;
        const ans = this.data[1];
        this.swap(1, this.data.length - 1);
        this.data.pop();
        this.sink();
        return ans;
    }

    swap(a, b) {
        const tmp = this.data[a];
        this.data[a] = this.data[b];
        this.data[b] = tmp;
    }

    size() {
        return this.data.length - 1;
    }
}
var getLeastNumbers = function (arr, k) {
    const h = new MinHeap();
    for (let x of arr) h.insert(x);
    let ans = [];
    while (k--) ans.push(h.remove());
    return ans;
};
```