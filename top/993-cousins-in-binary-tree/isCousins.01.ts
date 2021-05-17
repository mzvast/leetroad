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
    const ansX = dfs(root, x, 0);
    const ansY = dfs(root, y, 0);
    // console.log(d1, d2, p1, p2)
    if (!ansX || !ansY) return false;
    const [d1, p1] = ansX;
    const [d2, p2] = ansY;
    if (d1 === d2 && p1 !== p2) return true;
    return false;

    function dfs(root, targetVal, depth = 0) {
        if (!root) return null;
        if ((root.left && root.left.val === targetVal) || (root.right && root.right.val === targetVal)) return [depth + 1, root];
        const l = dfs(root.left, targetVal, depth + 1);
        const r = dfs(root.right, targetVal, depth + 1);
        if (l) return l;
        if (r) return r;
        return null;
    }
};

// DFS 搜了两遍，性能不好