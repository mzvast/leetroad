/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
//@ts-ignore
var numWays = function (steps, arrLen) {
    // steps个物品，每个物品的价值为+1/-1，最后的总重量为1
    // 要求任意一次选择之后的重量j满足0<=j<arrLen
    // dp[i][j] := 走了第i步之后，位置在j的走法
    // dp[i][j] = dp[i-1][j-1] ,选择+1
    //              + dp[i-1][j]，不动
    //              + dp[i-1][j+1] ,选择-1
    // ans = dp[steps][0]
    const maxLen = Math.min(steps, arrLen); // 不可能走到超过steps的地方，数组规模可以削减
    let odp = Array(maxLen).fill(0);
    let dp = Array(maxLen).fill(0);

    // base case
    // dp[..][0]??
    // dp[0][..]
    // dp[0][0] = 1;
    odp[0] = 1;
    dp[0] = 1;
    // for (let i = 0; i < arrLen && i <= steps; i++) {
    //     dp[i][i] = 1;
    // }

    for (let i = 1; i <= steps; i++) {
        for (let j = 0; j < maxLen; j++) {
            if (i === j) {
                dp[j] = 1;
                continue;
            }
            // dp[j] = 0;
            dp[j] = odp[j]; // 不动
            if (j > 0) {
                dp[j] = mod(dp[j] + odp[j - 1]); //向右
            }
            if (j + 1 < maxLen) {
                dp[j] = mod(dp[j] + odp[j + 1]); // 向左
            }
        }
        let tmp = odp;
        odp = dp;
        dp = tmp;
        // [odp, dp] = [dp, odp]
    }

    // console.log(dp)

    return odp[0];

    function mod(x) {
        return x % (Math.pow(10, 9) + 7);
    }
};
