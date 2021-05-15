/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isUnivalTree = function (root) {
    if (!root) return false;
    const k = root.val;
    let ans = true;
    dfs(root);
    return ans

    function dfs(root) {
        if (!root) return;
        if (root.val !== k) { ans = false; return; }
        dfs(root.left);
        dfs(root.right);
    }
};