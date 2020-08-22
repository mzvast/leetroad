// https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xebrb2/
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

var postorderTraversal = function (root) {
    let result = [];
    travel(root);
    return result;
    function travel(root) {
        if (!root) return;
        travel(root.left);
        travel(root.right)
        result.push(root.val);
    }
};