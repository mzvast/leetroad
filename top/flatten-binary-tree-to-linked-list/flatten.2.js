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
    // 一路在右子树走
    // 有左子树就接到当前的右节点，原来的右节点放到左子树最右边节点的右叶子
    //
    helper(root);

    function helper(root) {
        if (!root) return;
        if (root.left) {
            let currRight = root.right;
            root.right = root.left;
            // 找到左子树最右边的子节点
            const rightMostNode = getRightMostNode(root.left);
            rightMostNode && (rightMostNode.right = currRight);

            root.left = null;
        }
        // move on to next
        root = root.right;
        helper(root);
    }

    function getRightMostNode(root) {
        if (!root) return null;
        if (root.right) {
            return getRightMostNode(root.right);
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
