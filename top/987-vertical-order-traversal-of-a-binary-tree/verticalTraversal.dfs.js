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
    //                         x，     y，      val
    const h = new Map(); //  < number, [[number, number]]>

    let left = (right = 0); //左右极限
    dfs(root, 0, 0);
    const ans = [];

    for (let i = left; i <= right; i++) {
        const list = h.get(i);
        if (!list) continue;
        // 对list内容进行排序
        list.sort(([y1, v1], [y2, v2]) => {
            if (y1 < y2) return -1;
            if (y1 === y2 && v1 < v2) return -1;
            return 1;
        });

        const temp = [];
        for (let item of list) {
            temp.push(item[1]);
        }
        ans.push(temp);
    }
    return ans;

    function dfs(node, x, y) {
        if (!node) return;
        const v = h.get(x) || [];
        v.push([y, node.val]);
        // console.log('set:', x, y, v);
        h.set(x, v);
        left = Math.min(left, x);
        right = Math.max(right, x);
        dfs(node.left, x - 1, y + 1);
        dfs(node.right, x + 1, y + 1);
    }
};
