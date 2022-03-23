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

var verticalTraversal = function (root) {
    const h = new Map(); // x,[y,val]
    let min_x = (max_x = 0);
    const ans = [];
    dfs(root, 0, 0);

    for (let i = min_x; i <= max_x; i++) {
        const list = h.get(i);
        if (!list) continue;
        list.sort(([y1, v1], [y2, v2]) =>
            y1 < y2 || (y1 === y2 && v1 < v2) ? -1 : 1
        );
        const temp = [];
        for (let x of list) {
            temp.push(x[1]);
        }
        ans.push(temp);
    }
    return ans;

    function dfs(root, x, y) {
        if (!root) return;
        const v = h.get(x) || [];
        v.push([y, root.val]);
        h.set(x, v);
        min_x = Math.min(min_x, x);
        max_x = Math.max(max_x, x);
        dfs(root.left, x - 1, y + 1);
        dfs(root.right, x + 1, y + 1);
    }
};
