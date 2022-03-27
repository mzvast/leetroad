class Node {
    constructor() {
        this.next = Array(2).fill(null);
        this.val = null;
        this.flag = 0;
    }
}
class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(num) {
        // console.log('tree.insert', num);
        let p = this.root;
        for (let i = 30; i >= 0; i--) {
            const idx = (num >> i) & 1;
            if (p.next[idx] === null) p.next[idx] = new Node();
            p = p.next[idx];
        }
        p.flag = 1;
        p.val = num;
    }

    search(num) {
        // console.log('tree.search', num);
        let p = this.root;
        let ans = 0;
        let letter = 0;
        for (let i = 30; i >= 0; i--) {
            if (p === null) {
                return -1;
            }
            const idx = (num >> i) & 1;
            if (p.next[+!idx]) {
                ans |= 1 << i;
                p = p.next[+!idx];
            } else {
                p = p.next[idx];
            }
        }
        // console.log(p.val);
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
        for (; nums[p] <= x[1]; p++) {
            tree.insert(nums[p]);
        }

        ans[x[2]] = tree.search(x[0]);
    }
    return ans;
};
// 离线查询，先排序，按查询的范围逐步插入