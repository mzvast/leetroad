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
    let pre_l = [],
        pre_r = [],
        in_l = [],
        in_r = [];
    for (let i = 0; i < in_idx; i++) {
        pre_l.push(preorder[i + 1]);
        in_l.push(inorder[i]);
    }

    for (let i = in_idx + 1; i < inorder.length; i++) {
        pre_r.push(preorder[i]);
        in_r.push(inorder[i]);
    }

    let newNode = new TreeNode(preorder[0]);

    newNode.left = buildTree(pre_l, in_l);
    newNode.right = buildTree(pre_r, in_r);
    return newNode;
};
