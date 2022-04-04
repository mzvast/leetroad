/**
 * @param {string[]} equations
 * @return {boolean}
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
var equationsPossible = function (equations) {
    // 先用相等关系建立并查集
    const u = new UnionSet(26);
    //   console.log(u.fa);
    for (let x of equations) {
        if (x[1] === '!') continue;
        const l = x[0].charCodeAt(0) - 97;
        const r = x[3].charCodeAt(0) - 97;
        u.merge(l, r);
    }

    // console.log(u.fa);

    // 再用不等关系检查是否冲突
    for (let x of equations) {
        if (x[1] === '=') continue;
        const l = x[0].charCodeAt(0) - 97;
        const r = x[3].charCodeAt(0) - 97;
        if (u.get(l) === u.get(r)) return false;
    }

    return true;
};
