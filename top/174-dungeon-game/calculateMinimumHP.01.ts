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

    const hp = [];
    for (let i = 0; i <= m; i++) {
        const cur = Array(n + 1).fill(+Infinity);
        hp.push(cur);
    }

    hp[m - 1][n] = hp[m][n - 1] = 1;

    for (let y = m - 1; y >= 0; y--) {
        for (let x = n - 1; x >= 0; x--) {
            hp[y][x] = Math.max(
                1,
                Math.min(hp[y + 1][x], hp[y][x + 1]) - d[y][x]
            );
        }
    }

    return hp[0][0];
};

// Time complexity: O(mn)
// Space complexity: O(mn)
