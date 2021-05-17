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
    let xDepth = -1,
        xParent = null,
        yDepth = -1,
        yParent = null;

    let depth = 0;
    bfs(root);

    if (!xParent || !yParent) return false;
    return xDepth === yDepth && xParent !== yParent;

    function bfs(root) {
        if (!root) return;
        const q = [root]
        while (q.length) {
            for (let i = 0, len = q.length; i < len; i++) {
                const cur = q.shift();
               
                if ((cur.left && cur.left.val === x)
                    || (cur.right && cur.right.val === x)) {
                    xDepth = depth;
                    xParent = cur;
                }
                if ((cur.left && cur.left.val === y)
                    || (cur.right && cur.right.val === y)) {
                    yDepth = depth;
                    yParent = cur;
                }
                if (xParent && yParent) break;

                if (cur.left) q.push(cur.left);
                if (cur.right) q.push(cur.right);

            }
            depth++;
        }
    }
};

// BFS