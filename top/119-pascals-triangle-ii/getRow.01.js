/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    // dp[i][j] := 第i层第j列的值
    //  dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
    // ans dp[rowIndex]

    const dp = Array(rowIndex + 1)
        .fill(0)
        .map(() => Array(rowIndex + 1 + 2).fill(0));
    // padding 2 zeros

    // 0 1 0
    // 0 1 1 0
    // 0 1 1 1 0

    // base case

    dp[0][1] = 1;

    for (let i = 1; i <= rowIndex; i++) {
        for (let j = 1; j <= i + 1; j++) {
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
        }
    }

    return dp[rowIndex].slice(1, -1);
};
