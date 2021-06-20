/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
    const d = dungeon; // alias
    const m = d.length,
        n = d[0].length;

    // hp[i][j] := minHpOf[i][j]
    // hp[i][j] = max(1, min(hp[i+1][j],hp[i][j+1])-d[i][j])

    // 滚动数组，只留一行
    const hp = Array(n + 1).fill(+Infinity);

    hp[n - 1] = 1;

    for (let y = m - 1; y >= 0; y--) {
        for (let x = n - 1; x >= 0; x--) {
            hp[x] = Math.max(1, Math.min(hp[x], hp[x + 1]) - d[y][x]);
        }
    }

    return hp[0];
};

// Time complexity: O(mn)
// Space complexity: O(m)
