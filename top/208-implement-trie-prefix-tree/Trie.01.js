class Node {
    constructor() {
        this.flag = 0;
        this.next = Array(26).fill(null);
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
    }
    p.flag = 1;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let p = this.root;
    for (let x of word) {
        const idx = x.charCodeAt(0) - 97;
        if (p.next[idx] === null) return false;
        p = p.next[idx];
    }
    return Boolean(p.flag);
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let p = this.root;
    for (let x of prefix) {
        const idx = x.charCodeAt(0) - 97;
        if (p.next[idx] === null) return false;
        p = p.next[idx];
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
