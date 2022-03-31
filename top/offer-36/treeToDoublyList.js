/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
    if (!root) return root;
    const q = [];

    dfs(root);

    const head = q[0];
    const tail = q[q.length - 1];
    // link right
    for (let i = 0; i < q.length - 1; i++) {
        q[i].right = q[i + 1];
        q[i + 1].left = q[i];
    }

    // link head&tail
    head.left = tail;
    tail.right = head;
    return head;

    function dfs(root) {
        if (!root) return;

        dfs(root.left);

        q.push(root);

        dfs(root.right);
    }
};
