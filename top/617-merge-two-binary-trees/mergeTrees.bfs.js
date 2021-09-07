/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
    if (!root1 && !root2) return null;
    if (!root1) return root2;
    if (!root2) return root1;
    const root = new TreeNode(root1.val + root2.val);
    const q1 = [root1];
    const q2 = [root2];
    const q = [root];

    while (q.length) {
        const len = q.length;
        for (let i = 0; i < len; i++) {
            const n1 = q1.shift();
            const n2 = q2.shift();
            const n = q.shift();

            const [left1, left2] = [n1.left, n2.left];
            const [right1, right2] = [n1.right, n2.right];

            if (left1 || left2) {
                if (left1 && left2) {
                    // merge
                    const left = new TreeNode(left1.val + left2.val);
                    n.left = left;
                    q1.push(left1);
                    q2.push(left2);
                    q.push(left);
                } else if (left1) {
                    n.left = left1;
                } else if (left2) {
                    n.left = left2;
                }
            }

            if (right1 || right2) {
                if (right1 && right2) {
                    const right = new TreeNode(right1.val + right2.val);
                    n.right = right;
                    q1.push(right1);
                    q2.push(right2);
                    q.push(right);
                } else if (right1) {
                    n.right = right1;
                } else if (right2) {
                    n.right = right2;
                }
            }
        }
    }
    return root;
};
