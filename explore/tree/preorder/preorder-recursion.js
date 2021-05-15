// https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xeywh5/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var preorderTraversal = function (root) {
    let result = []
    trav(root);
    return result;

    function trav(root) {
        if (root) {
            result.push(root.val);
            trav(root.left);
            trav(root.right);
        }
    }
};