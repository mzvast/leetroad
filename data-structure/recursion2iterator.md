## 递归无脑转迭代的方法

【原理】
递归在操作系统内部实现就是栈。
【核心数据结构】
用一个stack存储递归过程中的局部变量，
另一个stack存储程序运行状态（位置）

```js
// 例子1，postorder遍历
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
var postorderTraversal = function (root) {
    if (!root) return [];
    // 递归转栈
    const s1 = []; // 递归过程中的局部变量(相关节点)
    const s2 = []; // 程序到的程序位置
    // post_order(root.left) 0
    // post_order(root.right) 1
    // output(root) + return 2
    const ans = [];
    s1.push(root);
    s2.push(0);
    while (s1.length) {
        const status = s2.pop();
        switch (status) {
            case 0:
                {
                    s2.push(1);
                    if (top(s1).left !== null) {
                        s1.push(top(s1).left);
                        s2.push(0);
                    }
                }
                break;
            case 1:
                {
                    s2.push(2);
                    if (top(s1).right !== null) {
                        s1.push(top(s1).right);
                        s2.push(0);
                    }
                }
                break;
            case 2:
                {
                    ans.push(s1.pop().val);
                }
                break;
        }
    }

    return ans;

    function top(stack) {
        return stack[stack.length - 1];
    }
};

```

```js
// 例子2 inorder遍历
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

```