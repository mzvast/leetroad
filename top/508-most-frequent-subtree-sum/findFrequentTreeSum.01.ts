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
 var findFrequentTreeSum = function (root) {
    if (!root) return [];
    // f存 sum:count
    // 记一个最大的 maxFreq
    let maxFreq = 0;
    const f = {};

    sumTree(root);


    // console.log(Object.entries(f))
    const ans = [];

    for (const sum in f) {
        if (f[sum] === maxFreq) ans.push(sum);
    }


    return ans;


    function sumTree(root) {
        if (!root) return 0;

        const s = root.val + sumTree(root.left) + sumTree(root.right);
        f[s] = f[s] ? f[s] + 1 : 1;
        if (f[s] > maxFreq) maxFreq = f[s];
        return s;
    }
};