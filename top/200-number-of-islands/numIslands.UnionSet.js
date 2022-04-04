/**
 * @param {character[][]} grid
 * @return {number}
 */
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
var numIslands = function (grid) {
    const m = grid.length,
        n = grid[0].length;
    const u = new UnionSet(m * n);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '0') continue;
            // 判断上面和左边是否连通
            if (i - 1 >= 0 && grid[i - 1][j] === '1')
                u.merge(ind(i, j), ind(i - 1, j));
            if (j - 1 >= 0 && grid[i][j - 1] === '1')
                u.merge(ind(i, j), ind(i, j - 1));
        }
    }

    let ans = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1' && u.fa[ind(i, j)] === ind(i, j)) ans += 1;
        }
    }

    return ans;

    function ind(i, j) {
        return i * n + j;
    }
};
