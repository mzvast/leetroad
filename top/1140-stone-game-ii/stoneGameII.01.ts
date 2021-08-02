/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
    // dp[i][j] := 剩余i~len-1堆时，M为j的情况下，先取的人能获得的最大值
    // dp[i][j] = sum[i:len-1],(i + 2M>=len)
    //          = max(dp[i][j],sum[i:len-1]-dp[i+x][max(j,x)]);(i + 2M<len,1<=x<=2*j)

    // ans = dp[0][1]
    const n = piles.length;

    const dp = Array(n + 1)
        .fill(0)
        .map(() => Array(n + 1).fill(0));

    // base case
    // dp[0][..]
    // dp[..][0]

    let sum = 0;

    for (let i = n - 1; i >= 0; i--) {
        sum += piles[i];
        for (let j = 1; j <= n; j++) {
            if (i + 2 * j >= n) {
                dp[i][j] = sum;
            } else {
                for (let x = 1; x <= 2 * j; x++) {
                    dp[i][j] = Math.max(
                        dp[i][j],
                        sum - dp[i + x][Math.max(j, x)]
                    );
                }
            }
        }
    }
    return dp[0][1];
};
