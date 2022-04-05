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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    // output(root.val) 0
    // preorder(root.left) 1
    // preorder(root.right) 2
    // pop 3

    const ans = [];
    if (!root) return [];
    const s1 = [root]; // 局部变量
    const s2 = [0]; // 程序状态

    while (s1.length) {
        const status = s2.pop();
        switch (status) {
            case 0:
                {
                    s2.push(1);
                    ans.push(top(s1).val);
                }
                break;
            case 1:
                {
                    s2.push(2);
                    if (top(s1).left) {
                        s1.push(top(s1).left);
                        s2.push(0);
                    }
                }
                break;
            case 2:
                {
                    s2.push(3);
                    if (top(s1).right) {
                        s1.push(top(s1).right);
                        s2.push(0);
                    }
                }
                break;
            case 3: {
                s1.pop();
                break;
            }
        }
    }

    return ans;

    function top(stack) {
        return stack[stack.length - 1];
    }
};
