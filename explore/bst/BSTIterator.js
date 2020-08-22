// 实现一个二叉搜索树迭代器。你将使用二叉搜索树的根节点初始化迭代器。

// 调用 next() 将返回二叉搜索树中的下一个最小的数。

//  

// 示例：



// BSTIterator iterator = new BSTIterator(root);
// iterator.next();    // 返回 3
// iterator.next();    // 返回 7
// iterator.hasNext(); // 返回 true
// iterator.next();    // 返回 9
// iterator.hasNext(); // 返回 true
// iterator.next();    // 返回 15
// iterator.hasNext(); // 返回 true
// iterator.next();    // 返回 20
// iterator.hasNext(); // 返回 false
//  

// 提示：

// next() 和 hasNext() 操作的时间复杂度是 O(1)，并使用 O(h) 内存，其中 h 是树的高度。
// 你可以假设 next() 调用总是有效的，也就是说，当调用 next() 时，BST 中至少存在一个下一个最小的数。

// 作者：力扣 (LeetCode)
// 链接：https://leetcode-cn.com/leetbook/read/introduction-to-data-structure-binary-search-tree/xpg4qe/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
    this.cur = root;
    this.stack = [];
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    while (this.stack.length > 0 || this.cur !== null) {
        while (this.cur !== null) {
            this.stack.push(this.cur);
            this.cur = this.cur.left;
        }
        if (this.stack.length > 0) {
            let top = this.cur = this.stack.pop();
            this.cur = this.cur.right;
            return top.val;
        }
    }
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return this.stack.length > 0 || this.cur !== null
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */