## 215. 数组中的第K个最大元素
```
给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

 

示例 1:

输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
示例 2:

输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
 

提示：

1 <= k <= nums.length <= 104
-104 <= nums[i] <= 104
```
%
```js
class MinHeap {
    constructor() {
        this.data = [null];
    }

    insert(x) {
        this.data.push(x);
        this.swim();
    }

    // up
    swim() {
        let idx = this.data.length - 1;
        while (true) {
            const pid = idx >> 1;
            if (idx > 1 && this.data[pid] > this.data[idx]) {
                this.swap(pid, idx);
                idx = pid;
            } else {
                break;
            }
        }
    }

    remove() {
        if (this.data.length === 1) return;
        this.swap(1, this.data.length - 1);

        const ans = this.data.pop();
        this.sink();
        return ans;
    }

    sink() {
        let idx = 1;
        while (idx * 2 < this.data.length) {
            const leftIdx = idx * 2, rihgtIdx = leftIdx + 1;
            let minIdx = idx;
            if (this.data[minIdx] > this.data[leftIdx]) minIdx = leftIdx;
            if (rihgtIdx < this.data.length && this.data[minIdx] > this.data[rihgtIdx]) minIdx = rihgtIdx;
            if (minIdx === idx) break;
            this.swap(minIdx, idx);
            idx = minIdx;
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
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const h = new MinHeap();
    for (let x of nums) h.insert(x);
    while (h.size() > k) h.remove();
    return h.top();
};
```