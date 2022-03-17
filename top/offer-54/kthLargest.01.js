/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
    const cnt_r = getCount(root.right);
    if (cnt_r >= k) return kthLargest(root.right, k);
    if (cnt_r + 1 === k) return root.val;
    return kthLargest(root.left, k - cnt_r - 1);
};

function getCount(root) {
    if (!root) return 0;
    return getCount(root.left) + getCount(root.right) + 1;
}
