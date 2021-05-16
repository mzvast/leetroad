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

    helper(root, 0);
    return ans;

    function helper(root, num) {
        if (!root) return;

        num = 10 * num + root.val;
        if (!root.left && !root.right) {
            ans += num;
        } else {
            helper(root.left, num);
            helper(root.right, num);
        }
    }
};