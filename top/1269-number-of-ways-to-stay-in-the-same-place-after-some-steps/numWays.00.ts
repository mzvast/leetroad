/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function (steps, arrLen) {
    // steps个物品，每个物品的价值为+1/-1，最后的总重量为1
    // 要求任意一次选择之后的重量j满足0<=j<arrLen
    // dp[i][j] := 走了第i步之后，位置在j的走法
    // dp[i][j] = dp[i-1][j-1] ,选择+1
    //              + dp[i-1][j]，不动
    //              + dp[i-1][j+1] ,选择-1
    // ans = dp[steps][0]

    let dp = [];
    arrLen = Math.min(steps, arrLen); // 缩减数组规模
    for (let i = 0; i <= steps; i++) {
        const cur = Array(arrLen).fill(0);
        dp.push(cur);
    }

    // base case
    // dp[..][0]??
    // dp[0][..]
    // dp[0][0] = 1;
    for (let i = 0; i < arrLen && i <= steps; i++) {
        dp[i][i] = 1;
    }

    for (let i = 1; i <= steps; i++) {
        for (let j = 0; j < arrLen; j++) {
            if (i === j) continue;
            dp[i][j] += mod(dp[i - 1][j]); // 不动
            if (j > 0) {
                dp[i][j] += mod(dp[i - 1][j - 1]); //向右
            }
            if (j + 1 < arrLen) {
                dp[i][j] += mod(dp[i - 1][j + 1]); // 向左
            }
        }
    }

    // console.log(dp)

    return mod(dp[steps][0]);

    function mod(x) {
        return x % (Math.pow(10, 9) + 7);
    }
};
