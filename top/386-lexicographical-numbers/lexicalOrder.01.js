class Node {
    constructor() {
        this.next = Array(10).fill(null);
        this.flag = 0;
        this.val = null;
    }
}
class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(num) {
        let p = this.root;
        for (let x of num.toString()) {
            const idx = +x;
            if (p.next[idx] === null) p.next[idx] = new Node();
            p = p.next[idx];
        }
        p.flag = 1;
        p.val = num;
    }

    print() {
        let ans = [];
        dfs(this.root);
        return ans;
        function dfs(root) {
            if (!root) return;
            if (root.flag) ans.push(root.val);
            for (let i = 0; i <= 9; i++) dfs(root.next[i]);
        }
    }
}
/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
    // 10叉树
    const tree = new Trie();
    for (let i = 1; i <= n; i++) tree.insert(i);
    return tree.print();
};
