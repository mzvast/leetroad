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
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
    // 定义队列结构 <TreeNode, number>节点及其编号
    // if parent num = i,
    // then left num = 2*i, right num = 2*i+1
    let q = [[root, 0]];
    let ans = 0;
    while (q.length) {
        const len = q.length;
        let l = (r = q[0][1]);
        // on level
        for (let i = 0; i < len; i++) {
            const [node, num] = q.shift();

            r = num;
            // num-l 减小编号范围，l是层最小编号
            if (node.left) q.push([node.left, (num - l) * 2]);
            if (node.right) q.push([node.right, (num - l) * 2 + 1]);
        }
        ans = Math.max(ans, r - l + 1);
    }

    return ans;
};
