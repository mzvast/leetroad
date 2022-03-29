/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
    // dp[i][j] := 打破从i到j个气球所获得的最大值
    // [i..k-1] k [k+1..j],最后打破k
    // dp[i][j] = max(dp[i][k-1]+dp[k+1][j]+nums[i-1]*nums[k]*nums[j+1])
    // ans = dp[0][n-1]

    const n = nums.length;
    // padding
    nums.unshift(1);
    nums.push(1);

    const dp = Array(n + 2)
        .fill()
        .map(() => Array(n + 2).fill(0));

    // base case
    //dp[0][0]

    // i-j长度l从小到大
    for (let l = 1; l <= n; l++) {
        for (let i = 1; i <= n - l + 1; i++) {
            let j = i + l - 1;
            for (let k = i; k <= j; k++) {
                dp[i][j] = Math.max(
                    dp[i][j],
                    dp[i][k - 1] +
                        dp[k + 1][j] +
                        nums[i - 1] * nums[k] * nums[j + 1]
                );
            }
        }
    }
    return dp[1][n];
};
