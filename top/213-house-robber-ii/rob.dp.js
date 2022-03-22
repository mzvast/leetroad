/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    // dp[i][0/1] := 第i个房子没被偷/被偷的最大收益
    // dp[i][0] = max(dp[i-1][0],dp[i-1][1]) (没偷/偷)
    // dp[i][1] = dp[i-1][0]+nums[i]

    // 分成不偷第0个房子和不偷最后一个房子两种情况，求最大值

    const n = nums.length;
    let dp = Array(n)
        .fill()
        .map(() => Array(2).fill(-Infinity));

    let ans = -Infinity;

    // base case 1
    // 不偷第0个房子
    dp[0][0] = 0;

    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
        dp[i][1] = dp[i - 1][0] + nums[i];
    }

    ans = Math.max(ans, ...dp[n - 1]);

    // init dp
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < 2; j++) {
            dp[i][j] = -Infinity;
        }
    }

    // base case 2
    dp[0][0] = 0;
    dp[0][1] = nums[0];

    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
        if (i === n - 1) continue; // 不偷最后一个
        dp[i][1] = dp[i - 1][0] + nums[i];
    }

    ans = Math.max(ans, ...dp[n - 1]);

    return ans;
};
