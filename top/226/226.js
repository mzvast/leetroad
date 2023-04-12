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
var invertTree = function (root) {
    if (!root) return root;
    const q = [root];

    while (q.length) {
        const cur = q.shift();
        [cur.left, cur.right] = [cur.right, cur.left];
        cur.left && q.push(cur.left);
        cur.right && q.push(cur.right);
    }
    return root;
};
