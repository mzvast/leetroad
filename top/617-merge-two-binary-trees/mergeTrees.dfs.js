// dfs

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
    // let newTree = new TreeNode();
    return dfs(root1, root2);
    function dfs(node1, node2) {
        // base case
        if (!node1 && !node2) return null;
        let val = 0;
        if (node1 && node2) {
            val = node1.val + node2.val;
        } else {
            val = node1 ? node1.val : node2.val;
        }
        let newNode = new TreeNode(val);
        const left = dfs(node1 && node1.left, node2 && node2.left);
        const right = dfs(node1 && node1.right, node2 && node2.right);
        newNode.left = left;
        newNode.right = right;

        return newNode;
    }
};
