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
 var longestUnivaluePath = function (root) {
    if (!root) return 0;
    let ans = 0;
    up(root);
    return ans;

    function up(root) {
        if (!root) return 0;
        const l = up(root.left);
        const r = up(root.right);
        let pl = 0;
        let pr = 0;
        if (root.left && root.val === root.left.val) pl = l + 1;
        if (root.right && root.val === root.right.val) pr = r + 1;
        ans = Math.max(ans, pl + pr);
        return Math.max(pl, pr)
    }
};