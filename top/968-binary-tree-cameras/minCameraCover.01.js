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
 * @return {number}
 */
var minCameraCover = function (root) {
    // dp[i][j] := (当前节点，不包括父节点)覆盖自己及子节点所需的摄像头。
    // i父节点，j子节点 是否安装摄像头(0,1)
    let dp = Array(2)
        .fill(0)
        .map(() => Array(2).fill(0));

    getDP(root, dp);

    return Math.min(dp[0][0], dp[0][1]);

    function getDP(root, dp) {
        if (!root) {
            // base case
            dp[0][0] = 0;
            dp[0][1] = Infinity; // 空节点不能放
            dp[1][0] = 0;
            dp[1][1] = Infinity;
            return;
        }
        if (!root.left && !root.right) {
            // 叶子节点
            dp[0][0] = Infinity;
            dp[0][1] = 1;
            dp[1][0] = 0;
            dp[1][1] = 1;
            return;
        }

        let l = Array(2)
            .fill(0)
            .map(() => Array(2).fill(0));
        let r = Array(2)
            .fill(0)
            .map(() => Array(2).fill(0));

        getDP(root.left, l);
        getDP(root.right, r);
        dp[0][0] = Math.min(
            l[0][0] + r[0][1],

            l[0][1] + r[0][0],

            l[0][1] + r[0][1]
        );
        dp[0][1] =
            1 +
            Math.min(
                l[1][0] + r[1][0],

                l[1][1] + r[1][0],

                l[1][0] + r[1][1],

                l[1][1] + r[1][1]
            );
        dp[1][0] = Math.min(dp[0][0], l[0][0] + r[0][0]);
        dp[1][1] = dp[0][1];
    }
};
