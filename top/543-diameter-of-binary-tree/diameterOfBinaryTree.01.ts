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
var diameterOfBinaryTree = function (root) {
    if (!root) return 0;

    let ans = 0;

    lp(root);

    return ans;

    function lp(root) {
        // 返回节点个数
        if (!root) return 0;
        const l = lp(root.left);
        const r = lp(root.right);
        ans = Math.max(ans, l + r); // 1+l+r -1, 节点个数-1
        return 1 + Math.max(l, r);
    }
};
