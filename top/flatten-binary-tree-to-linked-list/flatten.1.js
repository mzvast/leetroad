// 给你二叉树的根结点 root ，请你将它展开为一个单链表：
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    // preorder 遍历
    let head = null,
        curr = null;
    traverse(root);

    // 此解法本质上还是构建了一个新的tree，然后替换旧的tree
    if (root) {
        root.left = null;
        root.right = head.right;
    }

    function traverse(root) {
        if (root === null) return null;
        // 链表的操作
        if (!head) {
            head = curr = new TreeNode(root.val);
        } else {
            curr.right = new TreeNode(root.val);
            curr = curr.right;
        }
        traverse(root.left);
        traverse(root.right);
    }
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.right.right = new TreeNode(6);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);

flatten(root);
console.log(root);
