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
 var distributeCoins = function (root) {
    let ans = 0;
    balance(root);
    return ans;

    function balance(root) {
        if (!root) return 0;
        const l = balance(root.left);
        const r = balance(root.right);
        ans += Math.abs(l) + Math.abs(r);
        return l + r + root.val - 1;
    }

};