// 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。

//

// 示例 1：

// 输入：n = 3
// 输出：5
// 示例 2：

// 输入：n = 1
// 输出：1
//

// 提示：

// 1 <= n <= 19

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/unique-binary-search-trees
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    // G(n) 长度为n的BST的数量
    // F(i,n) 以i为根，长度为n的BST的数量
    // G(0) = 1, G(1) = 1
    //DP数组定义： G 长度为i，G[i]BST数量
    const G = new Array(n + 1).fill(0);
    G[0] = 1;
    G[1] = 1;
    for (let i = 2; i <= n; i++) {
        // F
        for (let j = 1; j <= i; j++) {
            G[i] += G[j - 1] * G[i - j]; // 左子树*右子树
        }
    }
    return G[n];
};

console.log(numTrees(3));
