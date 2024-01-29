// 给定一堆道路信息，返回所有相连的道路分组。
const data = [
    {
        roadId: 0,
        prevId: [],
        nextId: [1],
    },
    {
        roadId: 1,
        prevId: [0],
        nextId: [2],
    },
    {
        roadId: 2,
        prevId: [1],
        nextId: [],
    },

    {
        roadId: 3,
        prevId: [],
        nextId: [],
    },
];

class UnionSet {
    constructor(n) {
        this.fa = Array.from({length: n}, (_, i) => i);
    }

    get(x) {
        return (this.fa[x] = this.fa[x] === x ? x : this.get(this.fa[x]));
    }

    merge(a, b) {
        const ra = this.get(a),
            rb = this.get(b);
        if (ra === rb) return;
        this.fa[rb] = ra;
    }
}

function solution() {
    const h = new UnionSet(data.length); // n=10

    // scan data to connect points
    for (let x of data) {
        const {prevId, nextId, roadId} = x;

        for (let p of prevId) {
            h.merge(roadId, p);
        }

        for (let p of nextId) {
            h.merge(roadId, p);
        }
    }

    // scan h to get connected roads

    const ans = {}; // rootid: number[]

    for (let i = 0; i < h.fa.length; i++) {
        const rootId = h.get(i);
        if (ans[rootId] === undefined) ans[rootId] = [];
        ans[rootId].push(i);
    }

    return ans; //
}

console.log(solution());
