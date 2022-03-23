/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

const h = new Map(); // 映射 原节点/新节点
var cloneGraph = function (node) {
    if (!node) return node;
    if (h.has(node)) return h.get(node);
    const newNode = new Node(node.val);
    h.set(node, newNode);
    for (let x of node.neighbors) {
        cloneGraph(x);
        newNode.neighbors.push(h.get(x));
    }
    return newNode;
};
