## 378. 有序矩阵中第 K 小的元素
```
给你一个 n x n 矩阵 matrix ，其中每行和每列元素均按升序排序，找到矩阵中第 k 小的元素。
请注意，它是 排序后 的第 k 小元素，而不是第 k 个 不同 的元素。

你必须找到一个内存复杂度优于 O(n2) 的解决方案。

 

示例 1：

输入：matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
输出：13
解释：矩阵中的元素为 [1,5,9,10,11,12,13,13,15]，第 8 小元素是 13
示例 2：

输入：matrix = [[-5]], k = 1
输出：-5
 

提示：

n == matrix.length
n == matrix[i].length
1 <= n <= 300
-109 <= matrix[i][j] <= 109
题目数据 保证 matrix 中的所有行和列都按 非递减顺序 排列
1 <= k <= n2
 

进阶：

你能否用一个恒定的内存(即 O(1) 内存复杂度)来解决这个问题?
你能在 O(n) 的时间复杂度下解决这个问题吗?这个方法对于面试来说可能太超前了，但是你会发现阅读这篇文章（ this paper ）很有趣。
```

%

```js
class MinHeap {
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
            if (pid > 0 && this.less(this.data[idx], this.data[pid])) {
                this.swap(idx, pid);
                idx = pid;
            } else {
                break;
            }
        }
    }

    remove() {
        if (this.size() === 0) return;
        const p = this.data[1];
        this.swap(1, this.data.length - 1);
        this.data.pop();
        this.sink();
        return p;
    }

    sink() {
        let idx = 1;
        while (idx * 2 < this.data.length) {
            let leftIdx = idx * 2, rightIdx = leftIdx + 1,
                tmp = idx;
            if (this.less(this.data[leftIdx], this.data[tmp])) tmp = leftIdx;
            if (rightIdx < this.data.length && this.less(this.data[rightIdx], this.data[tmp])) tmp = rightIdx;
            if (idx === tmp) break;
            this.swap(idx, tmp);
            idx = tmp;
        }
    }

    swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }
    size() {
        return this.data.length - 1;
    }
    top() {
        return this.data[1];
    }
}
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    // 多路归并
    // 当已经排序的元素数量等于k，则返回

    const m = matrix.length, n = matrix[0].length;
    // [val,x,y]
    function less(a, b) {
        return a[0] < b[0];
    }
    const h = new MinHeap(less);

    // 把每一列第一个放入

    for (let i = 0; i < m; i++) {
        h.insert([matrix[i][0], i, 0]);
    }
    for (let i = 0; i < k; i++) {
        const [cur, x, y] = h.remove();
        if (i === k - 1) return cur;
        // push next sibling
        if (y < n - 1) h.insert([matrix[x][y + 1], x, y + 1]);
    }

};
```
