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
    let xDepth = -1,
        xParent = null,
        yDepth = -1,
        yParent = null;
    dfs(root.left, 0, root);
    dfs(root.right, 0, root);

    if (!xParent || !yParent) return false;
    return xDepth === yDepth && xParent !== yParent;

    function dfs(root, depth, parent) {
        if (!root) return;
        if (root.val === x) {
            [xDepth, xParent] = [depth, parent];
        }
        if (root.val === y) {
            [yDepth, yParent] = [depth, parent];
        }
        if (xParent && yParent) return;
        dfs(root.left, depth + 1, root);
        dfs(root.right, depth + 1, root);

    }
};
// DFS 一次