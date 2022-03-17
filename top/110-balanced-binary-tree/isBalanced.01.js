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
 * @return {boolean}
 */
var isBalanced = function (root) {
    return getHeight(root) >= 0;
};

function getHeight(root) {
    if (!root) return 0;
    let l = getHeight(root.left);
    let r = getHeight(root.right);
    // 判断如果满足不平衡条件返回负数
    if (l < 0 || r < 0) return -2;
    if (Math.abs(l - r) > 1) return -2;

    return Math.max(l, r) + 1;
}
