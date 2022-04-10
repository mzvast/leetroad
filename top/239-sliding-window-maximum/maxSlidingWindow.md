## 239. 滑动窗口最大值
```
给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

返回 滑动窗口中的最大值 。

 

示例 1：

输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
输出：[3,3,5,5,6,7]
解释：
滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
示例 2：

输入：nums = [1], k = 1
输出：[1]
 

提示：

1 <= nums.length <= 105
-104 <= nums[i] <= 104
1 <= k <= nums.length
```
%
```js
// 单调队列
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    // lesson 17
    // 单调队列[递减]  存元素下标
    // 从队尾入队，把破坏单调性的元素从队尾移除 back<nums[i]
    // 队首始终为区间最大值

    const q = [];
    const n = nums.length;
    const ans = [];
    for (let i = 0; i < n; i++) {
        // 入队
        while (q.length > 0 && nums[q[q.length - 1]] < nums[i]) q.pop();
        q.push(i);
        // 出队
        if (i - q[0] === k) q.shift();
        if (i + 1 < k) continue
        ans.push(nums[q[0]]);
    }

    return ans;


};
```

```js
// 最大堆+滑动窗口
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function (nums, k) {
	// Sliding window
	const window = {};
	let left = 0, right = 0, // [left,right)
	    ans = [];
    
	const maxHeap = new MaxHeap(compareFn);
    
	while (right < nums.length) {
	    const add = nums[right];
	    // update heap
	    maxHeap.push(new HeapNode(add, right));
    
	    right++;
    
	    // update window
	    // window[add] = (window[add] || 0) + 1;
    
    
	    while (right - left === k) {
		// check ans todo:
		while (maxHeap.peek().index < left) {
		    maxHeap.pop();
		}
		const maxVal = maxHeap.peek().val;
		ans.push(maxVal);
    
		const del = nums[left];
		left++;
    
		// update window
		// if (window[del] !== undefined && window[del] > 0) {
		//     window[del]--;
		//     if (window[del] === 0) delete window[del]
		// }
    
	    }
	}
    
	return ans;
    
    
    };
    
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
	    // console.log('pop::', first);
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
```