/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    // 找根
    // 递归左
    // 递归右
    if (preorder.length === 0) return null;
    const in_idx = inorder.indexOf(preorder[0]);

    const pre_l = preorder.slice(1, in_idx + 1);
    const pre_r = preorder.slice(in_idx + 1);

    const in_l = inorder.slice(0, in_idx);
    const in_r = inorder.slice(in_idx + 1);

    const newNode = new TreeNode(preorder[0]);
    newNode.left = buildTree(pre_l, in_l);
    newNode.right = buildTree(pre_r, in_r);
    return newNode;
};
