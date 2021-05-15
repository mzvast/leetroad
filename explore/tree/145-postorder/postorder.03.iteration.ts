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
// postorder
// function travel(root) {
//     if (!root) return;
//     travel(root.left);
//     travel(root.right)
//     result.push(root.val);
// }

import {buildTree} from '../../../utils/buildTree';

// rev_postorder, 结果是反着的，最后ans倒一下
// function travel(root) {
//     if (!root) return;
//     result.push(root.val);
//     travel(root.right)
//     travel(root.left);
// }
var postorderTraversal = function (root) {
    if (!root) return [];
    let ans = [];
    let stack = [root];
    while (stack.length) {
        const cur = stack.pop();
        ans.unshift(cur.val);
        if (cur.left) stack.push(cur.left);
        if (cur.right) stack.push(cur.right);
    }

    return ans;
};
console.log(postorderTraversal(buildTree([1, null, 2, 3]))); // 12
