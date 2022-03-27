/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function (sticks) {
    let sum = 0;
    const h = new MinHeap();
    for (let x of sticks) h.insert(x);
    while (h.size() > 1) {
        const a = h.remove();
        const b = h.remove();
        const c = a + b;
        sum += c;
        h.insert(c);
    }
    return sum;
};
class MinHeap {
    constructor() {
        this.data = [null];
    }
    insert(x) {
        this.data.push(x);
        this.swim();
    }

    remove() {
        if (this.size() === 0) return null;
        const ans = this.data[1];
        const last = this.data.pop();
        if (this.size() > 0) {
            this.data[1] = last;
            this.sink();
        }
        return ans;
    }

    sink() {
        let idx = 1;
        while (true) {
            let leftIdx = idx * 2;
            let left = this.data[leftIdx];
            let rightIdx = leftIdx + 1;
            let right = this.data[rightIdx];
            let cur = this.data[idx];
            if (left !== undefined && left < cur) {
                if (right !== undefined && right < left) {
                    this.swap(rightIdx, idx);
                    idx = rightIdx;
                } else {
                    this.swap(leftIdx, idx);
                    idx = leftIdx;
                }
            } else if (right !== undefined && right < cur) {
                this.swap(rightIdx, idx);
                idx = rightIdx;
            } else {
                break;
            }
        }
    }
    swim() {
        let idx = this.data.length - 1;
        while (true) {
            const parentIdx = idx >>> 1;
            const cur = this.data[idx];
            const parent = this.data[parentIdx];
            if (parent !== null && parent > cur) {
                this.swap(parentIdx, idx);
                idx = parentIdx;
            } else {
                break;
            }
        }
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
