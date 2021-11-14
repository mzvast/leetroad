class HeapNode {
    constructor(val, index) {
        this.val = val;
        this.index = index;
    }
}

class MaxHeap {
    constructor(compare) {
        this.heap = [];
        this.compare = compare; // 比较函数
    }

    size() {
        return this.heap.length;
    }

    push(node) {
        const index = this.size();
        this.heap.push(node);
        this.goUp(node, index);
        // console.log('after push heap', this.heap);
    }

    // 弹出堆顶元素
    pop() {
        const first = this.heap[0];
        console.log('pop::', first);
        if (first !== undefined) {
            const last = this.heap.pop();
            this.heap[0] = last;
            this.goDown(last, 0);
            // console.log('after pop heap', this.heap);
            return first;
        }
        return null;
    }

    // 查看堆顶元素
    peek() {
        const first = this.heap[0];
        return first !== undefined ? first : null;
    }

    // 从上往下沉
    goDown(node, index) {
        while (index < this.size()) {
            const leftIndex = (index + 1) * 2 - 1;
            const leftNode = this.heap[leftIndex];
            const rightIndex = (index + 1) * 2;
            const rightNode = this.heap[rightIndex];

            // swap with the larger
            if (leftNode !== undefined && this.compare(node, leftNode) < 0) {
                if (
                    rightNode !== undefined &&
                    this.compare(leftNode, rightNode) < 0
                ) {
                    this.swap(index, rightIndex);
                    index = rightIndex;
                } else {
                    this.swap(index, leftIndex);
                    index = leftIndex;
                }
            } else if (
                rightNode !== undefined &&
                this.compare(node, rightNode) < 0
            ) {
                this.swap(index, rightIndex);
                index = rightIndex;
            } else {
                return;
            }
        }
    }

    // 从下往上冒泡
    goUp(node, index) {
        while (true) {
            const parentIndex = (index - 1) >>> 1;
            const parentNode = this.heap[parentIndex];
            if (
                parentNode !== undefined &&
                this.compare(parentNode, node) < 0
            ) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else {
                return;
            }
        }
    }

    // 交换元素
    swap(aIndex, bIndex) {
        const tmp = this.heap[aIndex];
        this.heap[aIndex] = this.heap[bIndex];
        this.heap[bIndex] = tmp;
    }
}

function compareFn(a, b) {
    let ans = 0;
    if (a.val < b.val) {
        ans = -1;
    } else if (a.val > b.val) {
        ans = 1;
    }

    // console.log('ans', a, b, ans);
    return ans;
}

const maxHeap = new MaxHeap(compareFn);

// test case

const data = [3, 1, 5, 2, 8];

for (let i = 0; i < data.length; i++) {
    const d = data[i];
    maxHeap.push(new HeapNode(d, i));
}
// console.log(maxHeap.heap);

console.log('peek', maxHeap.peek());
// maxHeap.pop();
// maxHeap.pop();
// maxHeap.pop();
// maxHeap.pop();
// maxHeap.pop();
