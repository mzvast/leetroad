/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

import { TreeNode } from "../../../utils/TreeNode";

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function (root) {
    // 层序遍历
    if (!root) return '';
    const q = [root];
    let ans = '';
    while (q.length) {
        for (let i = 0, len = q.length; i < len; i++) {
            const cur = q.shift();
            if (cur === null) {
                ans += (ans.length === 0 ? '' : ',') + '#';
                continue;
            } else {
                ans += (ans.length === 0 ? '' : ',') + cur.val;
            }

            q.push(cur ? cur.left : null);
            q.push(cur ? cur.right : null)


        }
    }
    return ans;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (data.length === 0) return null;
    // console.log(data)
    data = data.split(',')
    
    const root = new TreeNode(data[0]);
    const q = [root];
    for (let i = 1, len = data.length; i < len;) {
        const cur = q.shift();

        const l = data[i]
        if (l !== '#') {
            cur.left = new TreeNode(l)
            q.push(cur.left);
        }

        i++;

        const r = data[i]
        if (r !== '#') {
            cur.right = new TreeNode(r)
            q.push(cur.right);
        }

        i++;
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */