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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    if (!root) return false;

    let lastParent = null;
    let lastDepth = -1;
    let ans = false;
    dfs(root, null, 0);
    return ans;

    // dfs

    function dfs(root, parent, depth) {
        if (!root) return;

        if (root.val === x || root.val === y) {
            if (lastDepth === -1) {
                // first
                lastParent = parent;
                lastDepth = depth;
            } else if (lastDepth === depth && parent && lastParent !== parent) {
                ans = true;
                return;
            }
        }

        if (root.left) dfs(root.left, root, depth + 1);
        if (root.right) dfs(root.right, root, depth + 1);
    }
};
