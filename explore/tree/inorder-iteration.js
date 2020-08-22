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
    let stack = [];
    let cur = root;
    while (stack.length > 0 || cur !== null) {
        while (cur !== null) {
            stack.push(cur);
            cur = cur.left;
        }
        if (stack.length > 0) {
            cur = stack.pop();
            result.push(cur.val);
            cur = cur.right;
        }
    }
    return result;
};