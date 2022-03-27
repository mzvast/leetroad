// function Node() {
//     this.next = Array(2).fill(null);
//     this.min = Infinity;
// }
// next, min
// [null, null]
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

    search(num, limit) {
        let p = this.root;
        let ans = 0;
        if (p[2] > limit) return -1;
        for (let i = 30; i >= 0; i--) {
            if (p === null) {
                return -1;
            }
            const idx = (num >> i) & 1;
            if (p[+!idx] && p[+!idx][2] <= limit) {
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
    for (let num of nums) tree.insert(num);
    let ans = [];
    for (let q of queries) ans.push(tree.search(q[0], q[1]));
    return ans;
};

// 原理同方法02，优化内存占用（用数组代替对象）
