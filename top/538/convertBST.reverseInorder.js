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
 * @return {TreeNode}
 */
var bstToGst = function (root) {
    let sum = 0;

    dfs(root);

    return root;

    function dfs(root) {
        if (!root) return;

        dfs(root.right);

        sum += root.val;
        root.val = sum;

        dfs(root.left);
    }
};
