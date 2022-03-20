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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    if (!root) return false;

    // bfs
    let q = [root];

    let lastLayer = -1; // 上一个节点的层级
    let lastNode = null; // 上一个节点
    let curLayer = 0; // 当前层级

    while (q.length) {
        let len = q.length;
        curLayer += 1;
        while (--len >= 0) {
            const cur = q.shift();

            // match!
            if (cur.val === x || cur.val === y) {
                if (lastLayer === -1) {
                    // first node
                    lastLayer = curLayer;
                    lastNode = cur;
                } else if (
                    curLayer === lastLayer &&
                    lastNode.parent !== cur.parent
                ) {
                    return true;
                } else {
                    return false;
                }
            }

            if (cur.left) {
                cur.left.parent = cur;
                q.push(cur.left);
            }
            if (cur.right) {
                cur.right.parent = cur;
                q.push(cur.right);
            }
        }
    }
    return false;
};
