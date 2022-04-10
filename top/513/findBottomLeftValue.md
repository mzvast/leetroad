## 513. 找树左下角的值
```
给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。

假设二叉树中至少有一个节点。

 

示例 1:



输入: root = [2,1,3]
输出: 1
示例 2:



输入: [1,2,3,4,null,5,6,null,null,7]
输出: 7
 

提示:

二叉树的节点个数的范围是 [1,104]
-231 <= Node.val <= 231 - 1 
```

%
```js
// DFS
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
var findBottomLeftValue = function (root) {
    let maxDepth = -1, ans;
    dfs(root, 0);
    return ans;
    function dfs(root, depth) {
        if (!root) return;
        if (depth > maxDepth) {
            maxDepth = depth;
            ans = root.val;
        }
        if (root.left) dfs(root.left, depth + 1);
        if (root.right) dfs(root.right, depth + 1);
    }
};
```