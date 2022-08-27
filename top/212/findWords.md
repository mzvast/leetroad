## 212. 单词搜索 II
```
给定一个 m x n 二维字符网格 board 和一个单词（字符串）列表 words， 返回所有二维网格上的单词 。

单词必须按照字母顺序，通过 相邻的单元格 内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。

 

示例 1：


输入：board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
输出：["eat","oath"]
示例 2：


输入：board = [["a","b"],["c","d"]], words = ["abcb"]
输出：[]
 

提示：

m == board.length
n == board[i].length
1 <= m, n <= 12
board[i][j] 是一个小写英文字母
1 <= words.length <= 3 * 104
1 <= words[i].length <= 10
words[i] 由小写英文字母组成
words 中的所有字符串互不相同
```

%

```js
// Trie + dfs
/*
先把word都录入Trie，然后遍历每一个格子，看是否在Trie中构成单词
*/
class Node {
    constructor() {
        this.next = {};
        this.word = null;
    }
}
class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let p = this.root;
        for (let x of word) {
            if (!p.next[x]) p.next[x] = new Node();
            p = p.next[x];
        }
        p.word = word;
    }
}
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    const trieRoot = new Trie();

    for (let word of words) {
        trieRoot.insert(word);
    }

    const m = board.length, n = board[0].length;

    const visited = Array.from({ length: m }, () => Array(n).fill(false));

    const ans = new Set();// 因为多个起点可能会有相同的结果，需要去重

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(i, j, trieRoot.root);
        }
    }

    return Array.from(ans);

    // 搜索字母i,j是否在node上存在
    function dfs(i, j, node) {
        if (node?.word) ans.add(node.word);

        if (i < 0 || i >= m || j < 0 || j >= n || !node || !node.next[board[i][j]] || visited[i][j]) return;


        // select
        visited[i][j] = true;

        // bt

        dfs(i + 1, j, node.next[board[i][j]]);
        dfs(i - 1, j, node.next[board[i][j]]);
        dfs(i, j + 1, node.next[board[i][j]]);
        dfs(i, j - 1, node.next[board[i][j]]);

        // unselect
        visited[i][j] = false;
    }
};
```