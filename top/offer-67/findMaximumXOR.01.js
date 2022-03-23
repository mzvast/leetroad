class Node {
    constructor() {
        // this.flag = 0; // 所有数字都存到同一层了，就不需要flag了
        this.next = Array(2).fill(null);
    }
}
class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(num) {
        let p = this.root;
        for (let i = 30; i >= 0; i--) {
            const idx = (num >> i) & 1;
            if (p.next[idx] === null) p.next[idx] = new Node();
            p = p.next[idx];
        }
        return;
    }

    search(num) {
        let p = this.root;
        let ans = 0;
        for (let i = 30; i >= 0; i--) {
            const idx = (num >> i) & 1;
            if (p.next[+!idx]) {
                ans |= 1 << i;
                p = p.next[+!idx];
            } else {
                p = p.next[idx];
            }
        }

        return ans;
    }
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
    const tree = new Trie();
    for (let x of nums) tree.insert(x);
    let ans = -Infinity;
    for (let x of nums) ans = Math.max(ans, tree.search(x));
    return ans;
};
