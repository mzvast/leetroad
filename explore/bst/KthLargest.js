// 设计一个找到数据流中第K大元素的类（class）。注意是排序后的第K大元素，不是第K个不同的元素。

// 你的 KthLargest 类需要一个同时接收整数 k 和整数数组nums 的构造器，它包含数据流中的初始元素。每次调用 KthLargest.add，返回当前数据流中第K大的元素。

// 示例:

// int k = 3;
// int[] arr = [4,5,8,2];
// KthLargest kthLargest = new KthLargest(3, arr);
// kthLargest.add(3);   // returns 4
// kthLargest.add(5);   // returns 5
// kthLargest.add(10);  // returns 5
// kthLargest.add(9);   // returns 8
// kthLargest.add(4);   // returns 8
// 说明:
// 你可以假设 nums 的长度≥ k-1 且k ≥ 1。

// 作者：力扣 (LeetCode)
// 链接：https://leetcode-cn.com/leetbook/read/introduction-to-data-structure-binary-search-tree/xpjovh/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

/**
 * @param {number} k
 * @param {number[]} nums
 */
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null
        this.n = 1
    }
}
class BST {
    root = null;
    insert(val) {
        this.root = this._insert(this.root, val);
    }
    _insert(x, val) {
        if (x === null) return new TreeNode(val);
        if (val >= x.val) x.right = this._insert(x.right, val); // 允许重复
        else if (val < x.val) x.left = this._insert(x.left, val);
        x.n = this.size(x.left) + this.size(x.right) + 1;
        return x;
    }
    select(k) {
        return this._select(this.root, k)
    }
    _select(x, k) {
        if (x === null) return null;
        let rightSize = this.size(x.right);
        let mid = rightSize + 1
        if (mid === k) return x;
        if (k > mid) return this._select(x.left, k - mid);
        else if (k < mid) return this._select(x.right, k);
        else return x;
    }
    size(x) {
        if (x === null) return 0;
        return x.n;
    }
}
var KthLargest = function (k, nums) {
    this.bst = new BST()
    this.k = k;
    for (let num of nums) {
        this.bst.insert(num)
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.bst.insert(val);
    return this.bst.select(this.k).val;
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */