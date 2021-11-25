/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    // 构造最大堆，pop k次
    const maxHeap = new MaxHeap();

    for (const item of nums) {
        maxHeap.push(item);
    }
    // console.log(maxHeap.data)
    let ans = 0;
    while (k > 0) {
        k--;
        ans = maxHeap.pop();
    }
    return ans;
};

class MaxHeap {
    constructor() {
        this.data = [0];
        this.size = 0;
    }

    push(v) {
        this.data.push(v);
        this.size++;
        this.swim();
    }

    pop() {
        if (this.size === 0) return;
        const top = this.data[1];
        const last = this.data.pop();
        this.data[1] = last;
        this.size--;
        this.sink();
        // console.log(this.data);
        return top;
    }

    top() {
        if (this.size === 0) return;
        return this.data[1];
    }

    sink() {
        // 从上到下
        let idx = 1;

        while (idx <= this.size) {
            const leftIdx = idx * 2;
            const leftNode = this.data[leftIdx];
            const rightIdx = idx * 2 + 1;
            const rightNode = this.data[rightIdx];

            if (leftNode !== undefined && this.data[idx] < leftNode) {
                if (rightNode !== undefined && leftNode < rightNode) {
                    // swap with larger
                    this.swap(idx, rightIdx);
                    idx = rightIdx;
                } else {
                    this.swap(idx, leftIdx);
                    idx = leftIdx;
                }
            } else if (rightNode !== undefined && this.data[idx] < rightNode) {
                this.swap(idx, rightIdx);
                idx = rightIdx;
            } else {
                return;
            }
        }
    }

    swim() {
        // 从下到上
        let idx = this.size;
        while (idx > 1) {
            const parentIdx = Math.ceil((idx - 1) / 2);
            const parentNode = this.data[parentIdx];
            if (parentNode !== undefined && this.data[idx] > parentNode) {
                this.swap(idx, parentIdx);
                idx = parentIdx;
            } else {
                return;
            }
        }
    }

    swap(aIdx, bIdx) {
        let tmp = this.data[aIdx];
        this.data[aIdx] = this.data[bIdx];
        this.data[bIdx] = tmp;
    }
}
