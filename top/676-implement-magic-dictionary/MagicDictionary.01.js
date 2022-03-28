class Node {
    constructor() {
        this.flag = 0;
        this.next = Array(26).fill(null);
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let p = this.root;
        for (let s of word) {
            const idx = s.charCodeAt(0) - 97;
            if (p.next[idx] === null) p.next[idx] = new Node();
            p = p.next[idx];
        }
        p.flag = 1;
    }

    search(word, n) {
        // n位不一样
        return this._search(word, 0, this.root, n);
    }
    _search(word, pos, p, n) {
        if (pos === word.length) return p.flag && n === 0;
        let idx = word[pos].charCodeAt(0) - 97;
        // 精准匹配
        if (p.next[idx] && this._search(word, pos + 1, p.next[idx], n))
            return true;
        // 模糊匹配
        if (n) {
            for (let i = 0; i < 26; i++) {
                if (i === idx || p.next[i] === null) continue;
                if (this._search(word, pos + 1, p.next[i], n - 1)) return true;
            }
        }
        return false;
    }
}
var MagicDictionary = function () {
    this.tree = new Trie();
};

/**
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dictionary) {
    for (let x of dictionary) this.tree.insert(x);
};

/**
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (searchWord) {
    return this.tree.search(searchWord, 1);
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
