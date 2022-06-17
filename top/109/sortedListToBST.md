## 109. 有序链表转换二叉搜索树
```
给定一个单链表的头节点  head ，其中的元素 按升序排序 ，将其转换为高度平衡的二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差不超过 1。

 

示例 1:



输入: head = [-10,-3,0,5,9]
输出: [0,-3,9,-10,null,5]
解释: 一个可能的答案是[0，-3,9，-10,null,5]，它表示所示的高度平衡的二叉搜索树。
示例 2:

输入: head = []
输出: []
 

提示:

head 中的节点数在[0, 2 * 104] 范围内
-105 <= Node.val <= 105
```

%

```js
// 分治，不断找中间位置
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    if (!head) return null;

    return dfs(head, null);

    function dfs(left, right) {
        if (left === right) return null;
        const mid = getMiddle(left, right);
        const node = new TreeNode(mid.val);
        node.left = dfs(left, mid);
        node.right = dfs(mid.next, right);
        return node;
    }

    // 找到中间位置
    function getMiddle(left, right) {
        let p = q = left;

        while (q !== right && q.next !== right) {
            p = p.next;
            q = q.next.next;
        }
        return p;
    }
};
```