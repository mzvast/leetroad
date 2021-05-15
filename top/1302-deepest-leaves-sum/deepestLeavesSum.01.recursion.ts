// 给你一棵二叉树的根节点 root ，请你返回 层数最深的叶子节点的和 。

import {buildTree} from '../../utils/buildTree';

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
    let sum = 0;
    let maxDepth = 0;
    dfs(root, 0);
    return sum;

    function dfs(root, d) {
        if (!root) return;
        if (d > maxDepth) {
            maxDepth = d;
            sum = 0;
        }
        if (d === maxDepth) {
            sum += root.val;
        }
        return dfs(root.left, d + 1) + dfs(root.right, d + 1);
    }
};

const tree = buildTree([1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8]);

console.log(deepestLeavesSum(tree));
