// 同1038，但用了不同的方法
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
 * @return {TreeNode}
 */
var convertBST = function (root) {
    if (!root) return root;

    const q = []; // 排序后节点
    const v = []; // 排序后值

    dfs(root);

    // 后缀和
    for (let i = v.length - 2; i >= 0; i--) {
        v[i] = v[i] + v[i + 1];
    }

    for (let i = 0; i < q.length; i++) {
        q[i].val = v[i];
    }

    return root;

    function dfs(root) {
        if (!root) return;

        dfs(root.left);

        q.push(root);
        v.push(root.val);

        dfs(root.right);
    }
};
