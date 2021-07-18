// https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xeywh5/

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
var preorderTraversal = function (root) {
    let result = [];
    let stack = [];
    let cur = root;
    while (stack.length || cur) {
        while (cur) {
            result.push(cur.val);
            stack.push(cur);
            cur = cur.left;
        }
        if (stack.length) {
            cur = stack.pop();
            cur = cur.right;
        }
    }
    return result;
};
