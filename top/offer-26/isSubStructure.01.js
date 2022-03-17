/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
    if (!A || !B) return false;
    if (A.val === B.val && isMatch(A, B)) return true;
    return isSubStructure(A.left, B) || isSubStructure(A.right, B);
};

function isMatch(A, B) {
    if (!B) return true; // null 是非空树的子结构
    if (!A) return false;
    return (
        A.val === B.val && isMatch(A.left, B.left) && isMatch(A.right, B.right)
    );
}
