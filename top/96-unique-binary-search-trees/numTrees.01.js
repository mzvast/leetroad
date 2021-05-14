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
    // top down
    return G(n);

    function G(n) {
        if (n === 0 || n === 1) return 1;
        let result = 0;
        for (let i = 0; i < n; i++) {
            result += G(i) * G(n - i - 1);
        }
        return result;
    }
};

console.log(numTrees(3));
