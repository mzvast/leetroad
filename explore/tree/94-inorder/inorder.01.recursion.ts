// https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xecaj6/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function (root) {
    let result = [];
    travel(root);
    return result;

    function travel(root) {
        if (root) {
            travel(root.left);
            result.push(root.val);
            travel(root.right);
        }
    }
};