class Trie {
    constructor() {
        // [0,1, min]
        this.root = [null, null, Infinity];
    }

    insert(num) {
        let p = this.root;
        p[2] = Math.min(p[2], num);
        for (let i = 30; i >= 0; i--) {
            const idx = (num >> i) & 1;
            if (p[idx] === null) p[idx] = [null, null, Infinity];
            p = p[idx];
            p[2] = Math.min(p[2], num);
        }
    }

    search(num) {
        let p = this.root;
        let ans = 0;
        // if (p[2] > limit) return -1;
        for (let i = 30; i >= 0; i--) {
            if (p === null) {
                return -1;
            }
            const idx = (num >> i) & 1;
            if (p[+!idx]) {
                ans |= 1 << i;
                p = p[+!idx];
            } else {
                p = p[idx];
            }
        }
        return ans;
    }
}
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var maximizeXor = function (nums, queries) {
    const tree = new Trie();
    nums.sort((a, b) => (a < b ? -1 : 1));

    queries = queries.map((query, idx) => {
        return [...query, idx]; // 插入index
    });
    queries.sort((a, b) => (a[1] - b[1] < 0 ? -1 : 0));

    let ans = Array(queries.length).fill(-1);
    let p = 0;

    for (let i = 0; i < queries.length; i++) {
        const x = queries[i];
        // while (p < nums.length && nums[p] <= x[1]) tree.insert(nums[p++]);
        for (; nums[p] <= x[1]; p++) {
            tree.insert(nums[p]);
        }

        ans[x[2]] = tree.search(x[0]);
    }
    return ans;
};
