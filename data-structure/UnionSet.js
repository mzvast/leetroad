class UnionSet {
    constructor(n) {
        this.fa = Array.from({length: n}, (_, i) => i);
    }

    get(x) {
        return (this.fa[x] = this.fa[x] === x ? x : this.get(this.fa[x]));
    }

    merge(a, b) {
        let ra = this.get(a),
            rb = this.get(b);
        if (ra === rb) return;
        this.fa[ra] = rb;
    }
}

const u = new UnionSet(10);

u.merge(0, 1);
u.merge(1, 2);
console.log(u.get(0) === u.get(2)); // true
console.log(u.get(0) === u.get(3)); // false
console.log(u.fa);
