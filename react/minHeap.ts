// 添加新节点
export function push(heap, node) {
    const index = heap.length;
    heap.push(node);
    siftUp(heap, node, index);
}

// 查看堆的顶点
export function peek(heap) {
    const first = heap[0];
    return first === undefined ? null : first;
}

// 将堆的顶点提取出来
export function pop(heap) {
    const first = heap[0];
    if (first !== undefined) {
        const last = heap.pop();
        heap[0] = last;
        siftDown(heap, last, 0);
        return first;
    } else {
        return null;
    }
}

// 向上调整堆结构
function siftUp(heap, node, i) {
    let index = i;
    while (true) {
        let parentIndex = (index - 1) >>> 1;
        let parent = heap[parentIndex];
        if (parent !== undefined && node < parent) {
            // smaller than parent, swap!
            heap[parentIndex] = node;
            heap[index] = parent;
            index = parentIndex;
        } else {
            // parent is smaller, exit
            return;
        }
    }
}

// 向下调整堆结构
function siftDown(heap, node, i) {
    let index = i;
    const length = heap.length;
    while (index < length) {
        let leftIndex = (index + 1) * 2 - 1;
        let left = heap[leftIndex];
        let rightIndex = leftIndex + 1;
        let right = heap[rightIndex];
        // if left or right is smaller, swap with the smaller
        if (left !== undefined && left < node) {
            if (right !== undefined && right < left) {
                heap[rightIndex] = node;
                heap[index] = right;
                index = rightIndex;
            } else {
                heap[leftIndex] = node;
                heap[index] = left;
                index = leftIndex;
            }
        } else if (right !== undefined && right < node) {
            heap[rightIndex] = node;
            heap[index] = right;
            index = rightIndex;
        } else {
            return;
        }
    }
}

// 主函数
export function minHeapSort(arr) {
    const heap = [];
    for (let item of arr) {
        push(heap, item);
    }
    let len = arr.length;
    while (len > 0) {
        const min = pop(heap);
        arr[len - 1] = min;
        len--;
    }
}

// tests

var arr1 = [5, 8, 0, 10, 4, 6, 1];
minHeapSort(arr1);
console.log(arr1); // [10, 8, 6, 5,4, 1, 0]

// var arr2 = [5];
// minHeapSort(arr2);
// console.log(arr2); // [ 5 ]

// var arr3 = [5, 1];
// minHeapSort(arr3);
// console.log(arr3); //[ 5, 1 ]
