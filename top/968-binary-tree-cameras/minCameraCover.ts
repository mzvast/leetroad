/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 const NONE = 0;
 const COVERED = 1;
 const CAMERA = 2;
 var minCameraCover = function (root) {
     let ans = 0;
     if (dfs(root) === NONE) ans++;
     return ans;
 
     function dfs(root) {
         if (!root) return COVERED;
         const l = dfs(root.left);
         const r = dfs(root.right);
         if (l === NONE || r === NONE) {
             ans++;
             return CAMERA;
         }
         if (l === CAMERA || r === CAMERA) {
             return COVERED;
         }
         return NONE;
     }
 };