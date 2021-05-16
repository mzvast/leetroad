/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
 var maxDepth = function (root) {
    if (!root) return 0;
    const deps = root.children.map((child) => maxDepth(child))
    // console.log(root.children)
    return 1 + Math.max(...deps, 0)
};