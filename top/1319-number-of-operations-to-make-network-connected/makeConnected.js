/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */

class UnionSet {
    constructor(n) {
        this.fa = Array(n)
            .fill()
            .map((_, idx) => idx);
    }

    get(x) {
        return (this.fa[x] = this.fa[x] === x ? x : this.get(this.fa[x]));
    }

    merge(a, b) {
        this.fa[this.get(a)] = this.get(b);
    }
}
var makeConnected = function (n, connections) {
    const u = new UnionSet(n);

    if (connections.length < n - 1) return -1; // 网线不够

    for (let [a, b] of connections) {
        u.merge(a, b);
    }

    // console.log(u.fa);
    let unionCnt = 0;
    for (let i = 0; i < n; i++) {
        if (u.get(i) === i) unionCnt += 1;
    }
    // 操作次数=集合数量-1
    return unionCnt - 1;
};
