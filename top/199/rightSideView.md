## 199. 二叉树的右视图
```
给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

 

示例 1:



输入: [1,2,3,null,5,null,4]
输出: [1,3,4]
示例 2:

输入: [1,null,3]
输出: [1,3]
示例 3:

输入: []
输出: []
 

提示:

二叉树的节点个数的范围是 [0,100]
-100 <= Node.val <= 100 
```
%

```js
// bfs
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
 * @return {number[]}
 */
var rightSideView = function (root) {
    // bfs
    if (!root) return [];

    const ans = [];
    const q = [];
    q.push(root);
    while (q.length) {
        const len = q.length;
        ans.push(q[0].val);
        for (let i = 0; i < len; i++) {
            const cur = q.shift();
            if (cur.right) q.push(cur.right);
            if (cur.left) q.push(cur.left);
        }
    }
    return ans;
};
```

```js
//DFS
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
 * @return {number[]}
 */
var rightSideView = function (root) {
    // dfs
    if (!root) return [];

    const ans = [];

    dfs(root, 0);

    return ans;

    function dfs(root, depth) {
        if (!root) return;
        if (ans[depth] === undefined) ans[depth] = root.val;
        if (root.right) dfs(root.right, depth + 1);
        if (root.left) dfs(root.left, depth + 1);
    }
};
```