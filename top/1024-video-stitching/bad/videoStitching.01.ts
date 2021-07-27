/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
var videoStitching = function (clips, time) {
    // dp[n][i][j] := 用前n个片段覆盖i..j所需的最小片段数
    // dp[n][i][j] =
    // 不相交
    // 完全覆盖
    // 部分覆盖：前面相交、后面相交、中间相交
    // ans = dp[len][0][time]

    const len = clips.length;

    const dp = Array(1 + time)
        .fill(0)
        .map(() => Array(1 + time).fill(Infinity));

    // base case
    //

    for (let clip of clips) {
        const [s, e] = clip;
        // 子问题长度
        for (let l = 1; l <= time; l++) {
            for (let i = 0; i <= time - l; i++) {
                const j = i + l;
                // 不相交
                if (s > j || e < i) {
                    continue;
                }
                if (s <= i && e >= j) {
                    // 完全覆盖
                    dp[i][j] = 1;
                } else if (e >= j) {
                    // 后面相交
                    dp[i][j] = Math.min(dp[i][j], dp[i][s] + 1);
                } else if (s <= i) {
                    // 前面相交
                    dp[i][j] = Math.min(dp[i][j], dp[e][j] + 1);
                } else {
                    // 中间相交
                    dp[i][j] = Math.min(dp[i][j], dp[i][s] + dp[e][j] + 1);
                }
            }
        }
    }

    // console.log(dp);

    return Number.isFinite(dp[0][time]) ? dp[0][time] : -1;
};
