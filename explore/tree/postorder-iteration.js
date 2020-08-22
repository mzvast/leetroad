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
    let stack = [];
    let last = null;
    let cur = root;
    while (stack.length > 0 || cur !== null) {
        while (cur !== null) {
            stack.push(cur);
            cur = cur.left;
        }
        if (stack.length > 0) {
            cur = stack[stack.length - 1];
            if (cur.right === null || cur.right === last) {
                result.push(cur.val);
                stack.pop();
                last = cur;
                cur = null;
            } else {
                cur = cur.right;
            }
        }
    }
    return result;
};

