// https://leetcode-cn.com/problems/binary-tree-level-order-traversal
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
 * @return {number[][]}
 */
 var levelOrder = function (root) {
    const result = [];
    const q = [root]; // layerQueue
    let layerIndex = 0;
    helper(root);
    return result;

    function helper(root) {
        if (!root) return;
        while (q.length > 0) {
            const len = q.length;
            for (let i = 0; i < len; i++) {
                const cur = q.shift();
                // do something
                if (!result[layerIndex]) {
                    result[layerIndex] = [];
                }
                result[layerIndex].push(cur.val);
                //
                cur.left && (q.push(cur.left));
                cur.right && (q.push(cur.right));
            }
            layerIndex++;
        }
    }
};