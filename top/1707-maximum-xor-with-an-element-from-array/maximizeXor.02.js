class Node {
    constructor() {
        this.next = Array(2).fill(null);
        this.val = null;
        this.flag = 0;
        this.min = Infinity;
    }
}
class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(num) {
        // console.log('tree.insert', num);
        let p = this.root;
        p.min = Math.min(p.min, num);
        for (let i = 30; i >= 0; i--) {
            const idx = (num >> i) & 1;
            if (p.next[idx] === null) p.next[idx] = new Node();
            p = p.next[idx];
            p.min = Math.min(p.min, num);
        }
        p.flag = 1;
        p.val = num;
    }

    search(num, limit) {
        // console.log('tree.search', num);
        let p = this.root;
        let ans = 0;
        if (p.min > limit) return -1;
        for (let i = 30; i >= 0; i--) {
            if (p === null) {
                return -1;
            }
            const idx = (num >> i) & 1;
            if (p.next[+!idx] && p.next[+!idx].min <= limit) {
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

    for (let num of nums) tree.insert(num);
    let ans = [];
    for (let q of queries) ans.push(tree.search(q[0], q[1]));
    return ans;
};

// 在线查询，节点保存min信息，如果查询的数大于当前分支才可以继续