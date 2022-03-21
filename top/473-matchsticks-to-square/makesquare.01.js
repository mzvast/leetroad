/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
    let sum = 0;
    for (let x of matchsticks) sum += x;
    if (sum % 4) return false; // 4除不尽

    const avg = sum / 4; // 分成4个桶，每个桶长度
    const spaceArr = Array(4).fill(avg); // 4个桶的剩余状态
    matchsticks.sort((a, b) => (a < b ? -1 : 1)); // 从小到大排序

    return dfs(matchsticks.length - 1, spaceArr);

    function dfs(idx, spaceArr) {
        if (idx === -1) return true;

        let cur = matchsticks[idx];
        for (let i = 0; i < 4; i++) {
            // 尝试放到桶里
            if (spaceArr[i] < cur) continue; // 放不下
            if (
                spaceArr[i] === cur ||
                spaceArr[i] >= cur + matchsticks[0] // 放下之后还能放最短的（否则永远装不满）
            ) {
                spaceArr[i] -= cur;
                if (dfs(idx - 1, spaceArr)) return true;
                spaceArr[i] += cur;
            }
        }

        return false;
    }
};
