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
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function (root) {
	// 先保存先序遍历的结果，然后依次改变指针
	let list = [];
	dfs(root);
	let len = list.length;
	for (let i = 0; i < len; i++) {
	    const node = list[i];
	    node.left = null;
	    if (i < len - 1) {
		node.right = list[i + 1];
	    } else {
		node.right = null;
	    }
    
	}
    
	function dfs(root) {
	    if (!root) return;
	    list.push(root);
	    dfs(root.left);
	    dfs(root.right);
	}
    };