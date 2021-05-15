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
    if (!root) return [];
    const q = [root];
    const ans = [];
    while (q.length) {
        const curAns = []
        for (let i = 0, len = q.length; i < len; i++) {
            const cur = q.shift();
            curAns.push(cur.val);
            if (cur.left) q.push(cur.left);
            if (cur.right) q.push(cur.right);
        }
        ans.push(curAns)
    }
    return ans;
};