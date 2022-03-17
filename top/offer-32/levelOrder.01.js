/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    let ans = [];
    let q = [];
    q.push(root);

    while (q.length) {
        const len = q.length;
        let levelAns = [];
        for (let i = 0; i < len; i++) {
            const cur = q.shift();
            levelAns.push(cur.val);
            if (cur.left) q.push(cur.left);
            if (cur.right) q.push(cur.right);
        }
        ans.push(levelAns);
    }

    return ans;
};
