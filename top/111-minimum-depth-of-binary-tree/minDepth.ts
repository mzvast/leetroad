/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var minDepth = function (root) {
    if (!root) return 0;
    if (!root.left && !root.right) return 1; // 叶子

    const l = root.left ? minDepth(root.left) : Infinity;
    const r = root.right ? minDepth(root.right) : Infinity;    
    return Math.min(l, r) + 1
};