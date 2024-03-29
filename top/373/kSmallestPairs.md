## 373. 查找和最小的 K 对数字
```
给定两个以 升序排列 的整数数组 nums1 和 nums2 , 以及一个整数 k 。

定义一对值 (u,v)，其中第一个元素来自 nums1，第二个元素来自 nums2 。

请找到和最小的 k 个数对 (u1,v1),  (u2,v2)  ...  (uk,vk) 。

 

示例 1:

输入: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
输出: [1,2],[1,4],[1,6]
解释: 返回序列中的前 3 对数：
     [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
示例 2:

输入: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
输出: [1,1],[1,1]
解释: 返回序列中的前 2 对数：
     [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
示例 3:

输入: nums1 = [1,2], nums2 = [3], k = 3 
输出: [1,3],[2,3]
解释: 也可能序列中所有的数对都被返回:[1,3],[2,3]
 

提示:

1 <= nums1.length, nums2.length <= 105
-109 <= nums1[i], nums2[i] <= 109
nums1 和 nums2 均为升序排列
1 <= k <= 1000
```
%
```js
// 大顶堆，维护最小的k个元素
function less(a, b) {
    return a[0] + a[1] < b[0] + b[1];
}
class MaxHeap {
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
            if (idx > 1 && less(this.data[pid], this.data[idx])) {
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
            let temp = idx;
            if (less(this.data[temp], this.data[leftIdx])) temp = leftIdx;
            if (rihgtIdx < this.data.length && less(this.data[temp], this.data[rihgtIdx])) temp = rihgtIdx;
            if (temp === idx) break;
            this.swap(temp, idx);
            idx = temp;
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
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
    const h = new MaxHeap();
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (h.size() < k || less([nums1[i], nums2[j]], h.top())) {
                h.insert([nums1[i], nums2[j]]);
                if (h.size() > k) h.remove();
            } else {
                break;
            }
        }
    }

    return h.data.slice(1);
};
```