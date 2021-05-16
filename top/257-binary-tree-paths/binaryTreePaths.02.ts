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
 * @return {string[]}
 */
 var binaryTreePaths = function (root) {
    if (!root) return [];
    const ans = [];
    helper(root, '');
    return ans;
    // preorder+stack
    function helper(root, path) {
        if (!root) return;
        const connect = path.length === 0 ? '' : '->'
        path += connect + root.val;
        if (!root.left && !root.right) {
            ans.push(path)
        } else {
            helper(root.left, path);
            helper(root.right, path);
        }
    }
};