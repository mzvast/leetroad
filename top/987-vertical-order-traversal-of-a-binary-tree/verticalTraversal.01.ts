// 给你二叉树的根结点 root ，请你设计算法计算二叉树的 垂序遍历 序列。

import {buildTree} from '../../utils/buildTree';

// 对位于 (row, col) 的每个结点而言，其左右子结点分别位于 (row + 1, col - 1) 和 (row + 1, col + 1) 。树的根结点位于 (0, 0) 。

// 二叉树的 垂序遍历 从最左边的列开始直到最右边的列结束，按列索引每一列上的所有结点，形成一个按出现位置从上到下排序的有序列表。如果同行同列上有多个结点，则按结点的值从小到大进行排序。

// 返回二叉树的 垂序遍历 序列。

//

// 示例 1：

// 输入：root = [3,9,20,null,null,15,7]
// 输出：[[9],[3,15],[20],[7]]
// 解释：
// 列 -1 ：只有结点 9 在此列中。
// 列  0 ：只有结点 3 和 15 在此列中，按从上到下顺序。
// 列  1 ：只有结点 20 在此列中。
// 列  2 ：只有结点 7 在此列中。
// 示例 2：

// 输入：root = [1,2,3,4,5,6,7]
// 输出：[[4],[2],[1,5,6],[3],[7]]
// 解释：
// 列 -2 ：只有结点 4 在此列中。
// 列 -1 ：只有结点 2 在此列中。
// 列  0 ：结点 1 、5 和 6 都在此列中。
//           1 在上面，所以它出现在前面。
//           5 和 6 位置都是 (2, 0) ，所以按值从小到大排序，5 在 6 的前面。
// 列  1 ：只有结点 3 在此列中。
// 列  2 ：只有结点 7 在此列中。
// 示例 3：

// 输入：root = [1,2,3,4,6,5,7]
// 输出：[[4],[2],[1,5,6],[3],[7]]
// 解释：
// 这个示例实际上与示例 2 完全相同，只是结点 5 和 6 在树中的位置发生了交换。
// 因为 5 和 6 的位置仍然相同，所以答案保持不变，仍然按值从小到大排序。
//

// 提示：

// 树中结点数目总数在范围 [1, 1000] 内
// 0 <= Node.val <= 1000

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/vertical-order-traversal-of-a-binary-tree
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
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
    if (!root) return [];
    const ans = [];
    const vals = []; // [x,y,val]
    let minX = 0;
    let maxX = 0;
    helper(root, 0, 0);
    buildAns();
    return ans;

    function helper(root, x, y) {
        if (!root) return;

        if (x < minX) minX = x;
        if (x > maxX) maxX = x;

        vals.push([x, y, root.val]);

        helper(root.left, x - 1, y + 1);
        helper(root.right, x + 1, y + 1);
    }

    function buildAns() {
        // 这段排序容易出错
        vals.sort(([x1, y1, v1], [x2, y2, v2]) => {
            if (x1 === x2 && y1 === y2) {
                // x,y都相等，按v
                return v1 - v2;
            }
            if (x1 === x2) {
                // x相等，按y
                return y1 - y2;
            }
            return x1 - x2; // 按x
        });
        console.log('::vals', vals);
        let lastX = -1000;
        for (const [x, y, val] of vals) {
            if (x !== lastX) {
                ans.push([]);
                lastX = x;
            }
            ans[ans.length - 1].push(val);
        }
    }
};

// const t1 = buildTree([3, 9, 20, null, null, 15, 7]);
// console.log(verticalTraversal(t1)); // [[9],[3,15],[20],[7]]

// const t2 = buildTree([1, 2, 3, 4, 5, 6, 7]);
// console.log(verticalTraversal(t2)); // [[4],[2],[1,5,6],[3],[7]]

// const t3 = buildTree([1, 2, 3, 4, 6, 5, 7]);
// console.log(verticalTraversal(t3)); //[[4],[2],[1,5,6],[3],[7]]

// const t4 = buildTree([3, 1, 4, 0, 2, 2]);
// console.log(verticalTraversal(t4)); //[[0],[1],[3,2,2],[4]]

// const t6 = buildTree([1, 2, 3, 4, 5, 6, 7]);
// console.log(verticalTraversal(t6)); //[[4],[2],[1,5,6],[3],[7]]

// const t7 = buildTree([1, 2, 3, 4, 6, 5, 7]);
// console.log(verticalTraversal(t7)); //[[4],[2],[1,5,6],[3],[7]]

const t8 = buildTree([0, 8, 1, null, null, 3, 2, null, 4, 5, null, null, 7, 6]);
console.log(verticalTraversal(t8)); //[[8],[0,3,6],[1,4,5],[2,7]]
