/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
class Data {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
var movingCount = function (m, n, k) {
    const visitedArr = Array(m)
        .fill(0)
        .map(() => Array(n).fill(0));
    const dSum = Array(100).fill(0); // 序号->和
    const q = [];

    // i十位，j个位
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            dSum[i * 10 + j] = i + j;
        }
    }

    if (visitedArr[0][0]) return 0; // invalid init state

    visitedArr[0][0] = 1;
    q.push(new Data(0, 0));

    const dirs = [
        [0, +1],
        [0, -1],
        [+1, 0],
        [-1, 0],
    ];
    let ans = 0;
    while (q.length) {
        const cur = q.shift();
        ans += 1;
        // console.log('ans', ans, cur.x, cur.y);

        for (let dir of dirs) {
            const [x, y] = [cur.x + dir[0], cur.y + dir[1]];

            if (x < 0 || x >= m || y < 0 || y >= n) continue; // out of bound

            if (visitedArr[x][y]) continue; // visited??
            if (dSum[x] + dSum[y] > k) continue; // invalid

            visitedArr[x][y] = 1;
            q.push(new Data(x, y));
        }
    }

    return ans;
};
