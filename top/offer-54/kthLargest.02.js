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
    // 中序遍历从小到大
    const ans = [];
    dfs(root);
    return ans[k - 1];
    function dfs(root) {
        if (!root) return root;
        dfs(root.left);
        ans.unshift(root.val);
        dfs(root.right);
    }
};
