import {buildTree} from '../../utils/buildTree';
// 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

// 叶子节点 是指没有子节点的节点。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/path-sum-ii
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    // result
    const result = [];
    helper(root, targetSum, []);
    return result;

    function helper(root, targetSum, current /* 引用, stack的作用*/) {
        // Edge case
        if (!root) return;
        if (!root.left && !root.right) {
            if (root.val === targetSum) {
                result.push([...current, root.val]);
                return;
            }
        }
        // Process
        const newSum = targetSum - root.val;
        // Recursion

        current.push(root.val);
        helper(root.left, newSum, current);
        helper(root.right, newSum, current);
        current.pop();
    }
};
const root = buildTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]);

console.log(pathSum(root, 22));
