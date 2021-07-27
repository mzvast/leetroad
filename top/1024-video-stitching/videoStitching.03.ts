/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
var videoStitching = function (clips, time) {
    // dp[i] := 覆盖[0,i)所需的做少子区间的数量
    // dp[i] = min{dp[a[j]]}+1, (a[j]<i<=b[j])

    const dp = Array(time + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= time; i++) {
        for (let clip of clips) {
            const [a, b] = clip;
            if (a < i && i <= b) {
                dp[i] = Math.min(dp[i], dp[a] + 1);
            }
        }
    }

    return Number.isFinite(dp[time]) ? dp[time] : -1;
};
