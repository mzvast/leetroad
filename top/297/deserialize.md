## 297. 二叉树的序列化与反序列化
```
序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。

请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

提示: 输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。

 

示例 1：


输入：root = [1,2,3,null,null,4,5]
输出：[1,2,3,null,null,4,5]
示例 2：

输入：root = []
输出：[]
示例 3：

输入：root = [1]
输出：[1]
示例 4：

输入：root = [1,2]
输出：[1,2]
 

提示：

树中结点数在范围 [0, 104] 内
-1000 <= Node.val <= 1000
```

%

```js
// bfs
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    // level order
    if (!root) return JSON.stringify([]);
    const q = [root];
    const ans = [];

    while (q.length) {
        const len = q.length;
        for (let i = 0; i < len; i++) {
            const cur = q.shift();

            ans.push(cur?.val ?? null);
            if (cur) {
                q.push(cur.left);
                q.push(cur.right);
            }
        }
    }
    console.log(ans);

    return JSON.stringify(ans);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    const arr = JSON.parse(data);//.flat();
    if (arr.length === 0) return null;
    const n = arr.length;
    const root = new TreeNode(arr[0]);

    const q = [root];

    for (let i = 1; i < n;) {
        const cur = q.shift();

        const l = arr[i++];
        if (l !== null) {
            cur.left = new TreeNode(l);
            q.push(cur.left);
        }

        const r = arr[i++];
        if (r !== null) {
            cur.right = new TreeNode(r);
            q.push(cur.right);
        }
    }

    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
```

```js
// dfs preorder
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    // dfs preorder
    let ans = [];
    dfs(root);
    function dfs(root) {
        if (!root) {
            ans.push(null);
            return;
        }
        ans.push(root.val)
        dfs(root.left);
        dfs(root.right);
    }
    // console.log(ans);
    return JSON.stringify(ans);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    const arr = JSON.parse(data);
    let i = 0;
    function dfs() {
        if (arr[i] === null) {
            i++;
            return null;
        }

        const node = new TreeNode(arr[i++])
        node.left = dfs();
        node.right = dfs();
        return node;
    }

    return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
```