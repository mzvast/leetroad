/**
 * @param {number[][]} isConnected
 * @return {number}
 */
class UnionSet {
    constructor(n) {
        this.fa = Array(n).fill();
        for (let i = 0; i < n; i++) {
            this.fa[i] = i;
        }
    }

    get(x) {
        if (this.fa[x] === x) return x;
        const ans = this.get(this.fa[x]);
        this.fa[x] = ans; // 路径压缩
        return ans;
    }

    merge(a, b) {
        const ra = this.get(this.fa[a]);
        const rb = this.get(this.fa[b]);
        this.fa[ra] = rb;
    }
}

var findCircleNum = function (isConnected) {
    const n = isConnected.length;
    const u = new UnionSet(n);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (isConnected[i][j]) u.merge(i, j);
        }
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
        if (u.fa[i] === i) ans += 1;
    }

    return ans;
};
