## UnionSet

```js
// 竞赛
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
// 常规
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
```