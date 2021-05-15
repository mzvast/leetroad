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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function (root, subRoot) {
    if (!root) return false;
    let ans = false;

    dfs(root)

    return ans;

    function dfs(root) {
        if(!root) return;
        if (ans) return; // break;
        if (isSameTree(root, subRoot)) {
            ans = true;
            return;
        }
        dfs(root.left);
        dfs(root.right);
    }

    function isSameTree(root1, root2) {
        if (!root1 && !root2) return true;
        if (!root1 || !root2) return false;
        return root1.val === root2.val && isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right)
    }

};