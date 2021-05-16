/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var sumNumbers = function (root) {
    if (!root) return 0
    let ans = 0;
    let curAns = []; // stack
    helper(root);
    return ans;

    function helper(root) {
        if (!root) return;


        curAns.push(root.val);
        if (!root.left && !root.right) {
            // add to ans
            ans+= +curAns.join('');
        }

        helper(root.left);
        helper(root.right);
        curAns.pop();
    }
};