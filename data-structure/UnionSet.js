class UnionSet {
    constructor(n) {
        this.fa = Array(n)
            .fill()
            .map((_, idx) => idx);
    }

    get(x) {
        if (this.fa[x] === x) return x;
        const rx = this.get(this.fa[x]);
        this.fa[x] = rx; // 路径压缩
        return rx;
    }

    merge(a, b) {
        const ra = this.get(a);
        const rb = this.get(b);
        this.fa[ra] = rb;
    }
}
