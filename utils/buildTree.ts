import {TreeNode} from './TreeNode';

// 从层序遍历构建二叉树

export function buildTree(arr) {
    const root = new TreeNode(arr[0]);
    const q = [root]; // 处理过的节点
    for (let i = 1; i < arr.length; ) {
        const cur = q.shift();
        if (arr[i]) {
            cur.left = new TreeNode(arr[i]);
            q.push(cur.left);
        }
        i++;

        if (arr[i]) {
            cur.right = new TreeNode(arr[i]);
            q.push(cur.right);
        }
        i++;
    }
    return root;
}
// const test = buildTree([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]);
// console.log(JSON.stringify(test));
