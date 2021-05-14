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
    let q = [root];
    let index = 0;
    let result = []
    while (q.length > 0) {
        let len = q.length;
        for (let i = 0; i < len; i++) {
            let cur = q.shift();
            //
            if (!result[index]) result[index] = [];
            result[index].push(cur.val);
            //
            if (cur.left) q.push(cur.left);
            if (cur.right) q.push(cur.right);
        }
        if (q.length > 0) index++;
    }
    return result;
};