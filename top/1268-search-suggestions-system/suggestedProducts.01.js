class Node {
    constructor() {
        this.flag = 0;
        this.next = Array(26).fill(null);
        this.s = [];
    }
}
var Trie = function () {
    this.root = new Node();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let p = this.root;
    for (let x of word) {
        const idx = x.charCodeAt(0) - 97;
        if (p.next[idx] === null) p.next[idx] = new Node();
        p = p.next[idx];
        p.s.push(word); // 插入单词
        p.s.sort();
        if (p.s.length > 3) {
            // 排序
            p.s.length = 3; //移除溢出
        }
    }
    p.flag = 1;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let p = this.root;
    const ans = [];
    for (let x of word) {
        if (p === null) {
            ans.push([]);
            continue;
        }
        const idx = x.charCodeAt(0) - 97;
        p = p.next[idx];
        if (p) {
            ans.push(p.s.slice(0));
        } else {
            ans.push([]);
        }
    }
    return ans;
};

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
    const tree = new Trie();
    for (let x of products) tree.insert(x);

    return tree.search(searchWord);
};
