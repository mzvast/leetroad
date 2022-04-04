## MinHeap


```js
class MinHeap {
    constructor() {
        this.data = [null];
    }
    insert(x) {
        // 插入到最后，swim
        this.data.push(x);
        this.swim();
        console.log('after insert', this.data);
    }
    size() {
        return this.data.length - 1;
    }
    remove() {
        // 移除把最后元素放到index=1的位置,sink
        const ans = this.data[1];
        if (this.size() > 0) {
            const last = this.data.pop();
            this.data[1] = last;
            this.sink();
        }
        console.log('after remove ans', ans, this.data);
        return ans;
    }
    // up
    swim() {
        let idx = this.data.length - 1;
        while (true) {
            const pid = idx >>> 1;
            if (pid === 0) break;
            //     console.log('pid', pid);
            if (
                this.data[pid] !== undefined &&
                this.data[idx] < this.data[pid]
            ) {
                this.swap(idx, pid);
                idx = pid;
            } else {
                break;
            }
        }
    }
    // down
    sink() {
        let idx = 1;
        while (idx <= this.data.length - 1) {
            const cur = this.data[idx];
            const leftIdx = 2 * idx;
            const left = this.data[leftIdx];
            const rightIdx = 2 * idx + 1;
            const right = this.data[rightIdx];
        //     console.log('sink::cur,left,right', cur, left, right);
            if (left !== undefined && cur > left) {
                // swap with smaller
                if (right !== undefined && left > right) {
                //     console.log('sink::swap left');
                    this.swap(idx, rightIdx);
                    idx = rightIdx;
                } else {
                //     console.log('sink::swap right');
                    this.swap(idx, leftIdx);
                    idx = leftIdx;
                }
            } else if (right !== undefined && cur > right) {
                // console.log('sink::swap right');
                this.swap(idx, rightIdx);
                idx = rightIdx;
            } else {
                break;
            }
        }
    }
    swap(aIdx, bIdx) {
        const temp = this.data[aIdx];
        this.data[aIdx] = this.data[bIdx];
        this.data[bIdx] = temp;
    }
}

const h = new MinHeap();
// h.insert(1);
// h.insert(2);
// h.insert(3);
// let n = 3;
// while (n--) {
//     console.log(h.remove(), 'h.data', h.data, 'size::', h.size());
// }
// const testCase = [5, 2, 3, 100, 200, 900, 4, 1];
const testCase = [100, 200, 900, 5, 2, 3, 4, 1];
// const testCase = [3354, 4316, 3259, 4904, 4598, 474, 3166, 6322, 8080, 9009];
let n = testCase.length;
for (let x of testCase) h.insert(x);
console.log('h::', h.data);
while (n--) {
    console.log('out::', h.remove()); // 'h.data', h.data, 'size::', h.size());
}

```