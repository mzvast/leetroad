/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let ans = [];
    helper(root, 0, ans);
    return ans;
    function helper(root, k) {
        if (!root) return root;
        if (ans.length === k) ans.push([]);
        ans[k].push(root.val);
        helper(root.left, k + 1);
        helper(root.right, k + 1);
    }
};
