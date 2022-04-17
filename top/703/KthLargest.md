## 703. 数据流中的第 K 大元素
```
设计一个找到数据流中第 k 大元素的类（class）。注意是排序后的第 k 大元素，不是第 k 个不同的元素。

请实现 KthLargest 类：

KthLargest(int k, int[] nums) 使用整数 k 和整数流 nums 初始化对象。
int add(int val) 将 val 插入数据流 nums 后，返回当前数据流中第 k 大的元素。
 

示例：

输入：
["KthLargest", "add", "add", "add", "add", "add"]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
输出：
[null, 4, 5, 5, 8, 8]

解释：
KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   // return 4
kthLargest.add(5);   // return 5
kthLargest.add(10);  // return 5
kthLargest.add(9);   // return 8
kthLargest.add(4);   // return 8
 

提示：
1 <= k <= 104
0 <= nums.length <= 104
-104 <= nums[i] <= 104
-104 <= val <= 104
最多调用 add 方法 104 次
题目数据保证，在查找第 k 大元素时，数组中至少有 k 个元素
```

%

```js
//  2 3 4 5 5 8
// 维护最大k个元素元素的集合(k个元素的小顶堆)
// 每次新元素跟最小的元素比较，判断是否可以insert进去
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
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.h = new MinHeap();
    this.k = k;
    for (let x of nums) this.h.insert(x);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.h.insert(val);
    while (this.h.size() > this.k) this.h.remove();
    return this.h.top();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */


```