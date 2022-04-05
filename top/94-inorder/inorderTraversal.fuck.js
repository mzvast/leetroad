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
var inorderTraversal = function (root) {
    // 递归转栈
    // inorder(root.left) 0
    // output(root.val) 1
    // inorder(root.right) 2
    // return 3

    const ans = [];
    if (!root) return ans;

    const s1 = [root]; // 局部变量
    const s2 = [0]; // 运行状态

    while (s1.length) {
        const status = s2.pop();
        const top = s1[s1.length - 1];
        switch (status) {
            case 0:
                {
                    s2.push(1);
                    if (top.left) {
                        s1.push(top.left);
                        s2.push(0);
                    }
                }
                break;
            case 1:
                {
                    s2.push(2);
                    ans.push(top.val);
                }
                break;
            case 2:
                {
                    s2.push(3);
                    if (top.right) {
                        s1.push(top.right);
                        s2.push(0);
                    }
                }
                break;
            case 3:
                {
                    s1.pop();
                }
                break;
        }
    }

    return ans;
};
