// 根据一棵树的前序遍历与中序遍历构造二叉树。

// 注意:
// 你可以假设树中没有重复的元素。

// 例如，给出

// 前序遍历 preorder = [3,9,20,15,7]
// 中序遍历 inorder = [9,3,15,20,7]
// 返回如下的二叉树：

//     3
//    / \
//   9  20
//     /  \
//    15   7

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * Definition for a binary tree node. */
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (preorder.length === 0) return null;
    if (preorder.length === 1 && inorder.length === 1) {
        return new TreeNode(preorder[0]);
    }
    const rootVal = preorder[0];

    const rootIdxOfInorder = inorder.indexOf(rootVal);
    // 左右size
    const size = preorder.length;
    const leftSize = rootIdxOfInorder;
    const rightSize = preorder.length - leftSize - 1;
    // 拆分左右
    const leftPreorder = preorder.slice(1, 1 + leftSize);
    const rightPreorder = preorder.slice(1 + leftSize, size);

    const leftInorder = inorder.slice(0, rootIdxOfInorder);
    const rightInorder = inorder.slice(rootIdxOfInorder + 1, size);
    // 构建
    const leftNode = buildTree(leftPreorder, leftInorder);
    const rightNode = buildTree(rightPreorder, rightInorder);
    const rootNode = new TreeNode(rootVal, leftNode, rightNode);
    return rootNode;
};
