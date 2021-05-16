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
    // 计算每一个节点作为根的元素和，生成Map sum=>count,排序取最大
    if (!root) return []
    const sumCountMap = new Map();

    dfs(root);

    // console.log(sumCountMap)
    const arr = Array.from(sumCountMap);
    arr.sort((a, b) => {
        // count 从大到小
        if (a[1] > b[1]) return -1;
        return 1;
    })

    const maxCount = arr[0][1];
    // console.log(arr)
    const ans = arr.filter(([sum, count]) => count === maxCount).map(([sum, count]) => sum)
    // console.log(ans)
    return ans;

    function dfs(root) {
        if (!root) return;
        const curSum = sum(root);
        sumCountMap.set(curSum, (sumCountMap.get(curSum) || 0) + 1)
        dfs(root.left);
        dfs(root.right);
    }



    function sum(root) {
        if (!root) return 0;

        return root.val + sum(root.left) + sum(root.right)
    }
};