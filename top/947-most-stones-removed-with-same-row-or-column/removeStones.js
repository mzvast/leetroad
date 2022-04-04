/**
 * @param {number[][]} stones
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
var removeStones = function (stones) {
    // hashmap记录出现过的x，y
    // 建立并查集，连通xy重复的石头
    // ans = 石头数量 - 集合数量

    const n = stones.length;
    const u = new UnionSet(n);

    const h_x = new Map(); // x=>index
    const h_y = new Map(); // y=>index

    for (let i = 0; i < n; i++) {
        const [x, y] = stones[i];
        if (h_x.has(x)) u.merge(i, h_x.get(x));
        else {
            h_x.set(x, i);
        }

        if (h_y.has(y)) u.merge(i, h_y.get(y));
        else {
            h_y.set(y, i);
        }
    }
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        if (u.get(i) === i) cnt += 1;
    }

    return n - cnt;
};
