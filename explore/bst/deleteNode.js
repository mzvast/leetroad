// 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。

// 一般来说，删除节点可分为两个步骤：

// 首先找到需要删除的节点；
// 如果找到了，删除它。
// 说明： 要求算法时间复杂度为 O(h)，h 为树的高度。

// 示例:

// root = [5,3,6,2,4,null,7]
// key = 3

//     5
//    / \
//   3   6
//  / \   \
// 2   4   7

// 给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。

// 一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。

//     5
//    / \
//   4   6
//  /     \
// 2       7

// 另一个正确答案是 [5,2,6,null,4,null,7]。

//     5
//    / \
//   2   6
//    \   \
//     4   7

// 作者：力扣 (LeetCode)
// 链接：https://leetcode-cn.com/leetbook/read/introduction-to-data-structure-binary-search-tree/xpcnds/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (root === null) return null;
    if (key < root.val) root.left = deleteNode(root.left, key);
    else if (key > root.val) root.right = deleteNode(root.right, key);
    else {
        if (root.left === null) return root.right;
        if (root.right === null) return root.left;
        let nodeToDelete = root;
        root = min(root.right);
        root.right = deleteMin(nodeToDelete.right);
        root.left = nodeToDelete.left;
    }
    return root;
};

// 获取最小点
function min(x) {
    if (x.left === null) return x;
    return min(x.left);
}
// 删除最小点
function deleteMin(x) {
    if (x.left === null) return x.right;
    x.left = deleteMin(x.left);
    return x;
}

