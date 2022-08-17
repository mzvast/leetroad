/**
 * @param {number[]} nums
 * @return {number}
 */
class UnionSet {
    constructor(n) {
        this.fa = Array(n)
            .fill()
            .map((_, idx) => idx);
        this.size = Array(n).fill(1);
    }

    get(x) {
        return (this.fa[x] = this.fa[x] === x ? x : this.get(this.fa[x]));
    }

    merge(a, b) {
        const ra = this.get(a),
            rb = this.get(b);
        if (ra === rb) return;
        this.size[rb] += this.size[ra];
        // console.log('merge', a, b, this.size[rb]);
        this.fa[ra] = rb;
    }
}
var longestConsecutive = function (nums) {
    const h = new Map(); // num->idx
    const n = nums.length;
    const u = new UnionSet(n);
    for (let i = 0; i < n; i++) {
        const num = nums[i];
        if (h.has(num)) continue;
        h.set(num, i);
        // console.log('check', num);
        // check num-1
        if (h.has(num - 1)) {
            u.merge(i, h.get(num - 1));
        }
        // check num+1
        if (h.has(num + 1)) {
            u.merge(i, h.get(num + 1));
        }
    }

    // 找到size最大的集合
    let ans = 0;
    for (let i = 0; i < n; i++) {
        if (u.get(i) === i && u.size[i] > ans) ans = u.size[i];
    }

    return ans;
};
