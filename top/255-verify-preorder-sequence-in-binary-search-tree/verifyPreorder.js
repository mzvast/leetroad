/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function (preorder) {
    let pre_idx = -1; // 上一次的节点下标

    return judge(0, preorder.length);

    // [root,left...,right...]
    // [l,r) 为什么开区间?? todo:
    function judge(l, r) {
        if (r - l < 1) return true;
        let idx = l + 1;
        // 找到右边的起始位置
        while (idx < r && preorder[idx] < preorder[l]) idx += 1;
        // judgeleft
        if (!judge(l + 1, idx)) return false;

        // 判断
        if (pre_idx !== -1 && preorder[l] < preorder[pre_idx]) return false;
        pre_idx = l;

        // judgeRight
        if (!judge(idx, r)) return false;

        return true;
    }
};
