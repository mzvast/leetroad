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
 var maxPathSum = function (root) {
    if (!root) return 0;
    // 定义MS
    // 根节点必选
    // 最多1个child可以使用
    let ans = -Infinity;
    ms(root);
    return ans;

    function ms(root) {
        if (!root) return 0;
        const l = Math.max(0, ms(root.left));
        const r = Math.max(0, ms(root.right));

        ans = Math.max(ans, root.val + l + r);

        return root.val + Math.max(l, r)
    }
};