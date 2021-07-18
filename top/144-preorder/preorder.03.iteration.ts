// https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xeywh5/

import {buildTree} from '../../../utils/buildTree';

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
//  function trav(root) {
//     if (root) {
//         result.push(root.val);
//         trav(root.left);
//         trav(root.right);
//     }
// }
var preorderTraversal = function (root) {
    let ans = [];
    let stack = [root];
    while (stack.length) {
        const cur = stack.pop();
        ans.push(cur.val);
        if (cur.right) stack.push(cur.right);
        if (cur.left) stack.push(cur.left);
    }
    return ans;
};

console.log(preorderTraversal(buildTree([1, null, 2, 3]))); // 123
