/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
    let pre_idx = -1;
    const n = postorder.length;
    return judge(0, n - 1);

    // left..right..root
    // [l,r]
    function judge(l, r) {
        if (l >= r) return true;
        // 找到分界点
        let idx = l;
        while (idx < r && postorder[idx] < postorder[r]) idx += 1;

        // judge left
        if (!judge(l, idx - 1)) return false;

        // 判断值大小关系
        if (pre_idx !== -1 && postorder[r] < postorder[pre_idx]) return false;
        pre_idx = r;
        // judge right

        if (!judge(idx, r - 1)) return false;

        return true;
    }
};
