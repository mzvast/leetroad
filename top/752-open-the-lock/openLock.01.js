/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */

class Data {
    constructor(s, l) {
        this.s = s; // 字符串
        this.l = l; // 操作次数
    }
}
var openLock = function (deadends, target) {
    const visitedMap = new Map(); // <string,boolean>
    const q = [];

    for (let x of deadends) visitedMap.set(x, true);

    // init q
    if (visitedMap.has('0000')) return -1;
    q.push(new Data('0000', 0));

    // bfs
    while (q.length) {
        const cur = q.shift();

        if (cur.s === target) return cur.l;

        // mutate the state
        for (let i = 0; i < 4; i++) {
            for (let op of [+1, -1]) {
                const s = getS(cur.s, i, op);
                // console.log('s:', s)
                if (visitedMap.has(s)) continue; // visited
                visitedMap.set(s, true);
                q.push(new Data(s, cur.l + 1));
            }
        }
    }

    return -1;

    function getS(str, idx, op) {
        let s = +str[idx] + op;
        if (s > 9) s = 0;
        else if (s < 0) s = 9;

        return str.substr(0, idx) + s + str.substr(idx + 1);
    }
};
