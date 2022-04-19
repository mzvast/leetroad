## 863. 二叉树中所有距离为 K 的结点
```
给定一个二叉树（具有根结点 root）， 一个目标结点 target ，和一个整数值 k 。

返回到目标结点 target 距离为 k 的所有结点的值的列表。 答案可以以 任何顺序 返回。

 

示例 1：



输入：root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
输出：[7,4,1]
解释：所求结点为与目标结点（值为 5）距离为 2 的结点，值分别为 7，4，以及 1
示例 2:

输入: root = [1], target = 1, k = 3
输出: []
 

提示:

节点数在 [1, 500] 范围内
0 <= Node.val <= 500
Node.val 中所有值 不同
目标结点 target 是树上的结点。
0 <= k <= 1000
```

%

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
    let ans = [];
    getResult(root, target, k)

    return ans;

    function dfs(root, depth, k) {
        if (k < 0) return;
        if (!root) return;

        if (depth === k) {
            ans.push(root.val);
            return;
        }
        dfs(root.left, depth + 1, k);

        dfs(root.right, depth + 1, k);
    }

    function getResult(root, target) {
        if (!root) return null;
        if (root === target) {
            dfs(root, 0, k);
            return root;
        }
        if (getResult(root.left, target)) {
            // 回溯，在左子树中找到了
            k -= 1;
            if (k === 0) ans.push(root.val);
            dfs(root.right, 0, k - 1);
            return target;
        } else if (getResult(root.right, target)) {
            // 回溯，在右子树中找到了
            k -= 1;
            if (k === 0) ans.push(root.val);
            dfs(root.left, 0, k - 1);
            return target;
        }
        return null;
    }
};
```