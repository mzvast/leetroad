/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
    // postorder(root.children) 0
    // output(root.val) + return 1

    // 递归转栈
    if (!root) return [];

    const ans = [];

    const s1 = [root];
    const s2 = [0];

    while (s1.length) {
        const status = s2.pop();
        const top = s1[s1.length - 1];
        switch (status) {
            case 0:
                {
                    s2.push(1);
                    if (top.children) {
                        for (let i = top.children.length - 1; i >= 0; i--) {
                            const x = top.children[i];
                            s1.push(x);
                            s2.push(0);
                        }
                    }
                }
                break;
            case 1:
                {
                    ans.push(s1.pop().val);
                }
                break;
        }
    }

    return ans;
};
