/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
    if (!root) return 0;

    return (
        getPathSum(root, sum) +
        pathSum(root.left, sum) +
        pathSum(root.right, sum)
    );
};

function getPathSum(root, sum) {
    if (!root) return 0;
    return (
        (root.val === sum) + //强转为number
        getPathSum(root.left, sum - root.val) +
        getPathSum(root.right, sum - root.val)
    );
}
