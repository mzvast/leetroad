/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
class UnionSet {
    constructor(n) {
        this.fa = Array(n)
            .fill()
            .map((_, idx) => idx);
    }

    get(x) {
        return (this.fa[x] = this.fa[x] === x ? x : this.get(this.fa[x]));
    }

    merge(a, b) {
        this.fa[this.get(a)] = this.get(b);
    }
}

class MinHeap {
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
            const cur = this.data[idx];
            const parentIdx = idx >>> 1;
            const parent = this.data[parentIdx];
            if (parent !== null && this.less(cur, parent)) {
                this.swap(idx, parentIdx);
                idx = parentIdx;
            } else {
                break;
            }
        }
    }

    remove() {
        if (this.size() === 0) return;
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
            const cur = this.data[idx];
            const leftIdx = idx << 1;
            const rightIdx = leftIdx + 1;
            const left = this.data[leftIdx];
            const right = this.data[rightIdx];
            if (left !== undefined && this.less(left, cur)) {
                if (right !== undefined && this.less(right, left)) {
                    this.swap(rightIdx, idx);
                    idx = rightIdx;
                } else {
                    this.swap(leftIdx, idx);
                    idx = leftIdx;
                }
            } else if (right !== undefined && this.less(right, cur)) {
                this.swap(rightIdx, idx);
                idx = rightIdx;
            } else {
                break;
            }
        }
    }

    less(a, b) {
        return a.charCodeAt(0) < b.charCodeAt(0);
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
var smallestStringWithSwaps = function (s, pairs) {
    const n = s.length;
    const u = new UnionSet(n);

    for (let pair of pairs) {
        u.merge(pair[0], pair[1]);
    }

    const h = Array(n)
        .fill()
        .map(() => new MinHeap());

    for (let i = 0; i < n; i++) {
        h[u.get(i)].insert(s[i]);
    }

    let ans = '';
    for (let i = 0; i < n; i++) {
        ans = ans + h[u.get(i)].remove(s[i]);
    }
    return ans;
};
