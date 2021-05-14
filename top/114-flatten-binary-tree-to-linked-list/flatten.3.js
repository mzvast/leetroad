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
    while (root) {
        if (root.left) {
            // 左子树插入右边
            let currRight = root.right;
            root.right = root.left;
            // 右子树插入左子树最右侧
            const rightMostNode = getRightMostNode(root.left);
            rightMostNode && (rightMostNode.right = currRight);
            // 左节点置空
            root.left = null;
        }
        root = root.right; // 一路沿着右子树走
    }

    function getRightMostNode(root) {
        while (root.right) {
            root = root.right;
        }
        return root;
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
