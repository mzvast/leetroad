// 给你一棵二叉树的根节点 root ，请你返回 层数最深的叶子节点的和 。

//

// 示例 1：

// 输入：root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// 输出：15
// 示例 2：

// 输入：root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// 输出：19

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/deepest-leaves-sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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
var deepestLeavesSum = function (root) {
    if (!root) return 0;
    const q = [root];
    let sum = 0;
    while (q.length) {
        sum = 0;
        for (let i = 0, len = q.length; i < len; i++) {
            const cur = q.shift();
            sum += cur.val;
            if (cur.left) q.push(cur.left);
            if (cur.right) q.push(cur.right);
        }
    }
    return sum;
};
