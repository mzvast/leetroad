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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
    return trim(root, low, high);

    //   a
    //  / \
    // L   R

    // BST 基本属性:L<= a < R

    function trim(root, L, R) {
        if (!root) return null;

        // a<L, 左边整个裁掉, root = R
        if (root.val < L) {
            return trim(root.right, L, R);
        }
        // a>R, 右边整个裁掉, root = L
        if (root.val > R) {
            return trim(root.left, L, R);
        }
        // L<a<R, recursion
        root.left = trim(root.left, L, R);
        root.right = trim(root.right, L, R);
        return root;
    }
};
