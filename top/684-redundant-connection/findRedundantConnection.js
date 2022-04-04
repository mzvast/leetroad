/**
 * @param {number[][]} edges
 * @return {number[]}
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
var findRedundantConnection = function (edges) {
    const n = edges.length;
    const u = new UnionSet(n + 1);

    // 依次添加连通关系，如果发现已经连通了就是多余的链接

    for (let x of edges) {
        if (u.get(x[0]) === u.get(x[1])) return x;
        u.merge(x[0], x[1]);
    }
    return [];
};
