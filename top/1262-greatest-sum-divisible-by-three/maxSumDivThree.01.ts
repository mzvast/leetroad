/**
 * @param {number[]} nums
 * @return {number}
 */
//@ts-ignore
 var maxSumDivThree = function (nums) {
    // dp[i][j] := 到第i个数，除3余数为j的最大值
    // dp[i][j] = 
    //  if nums[i] %3 ===0, dp[i][j] = max(dp[i-1][j], dp[i-1][j]+nums[i]) , 0<=j<=2
    // if nums[i] %3 ===1, dp[i][0] = max(dp[i-1][0],dp[i-1][2]+nums[i])
    //                      dp[i][1] = max(dp[i-1][1],dp[i-1][0]+nums[i])
    //                      dp[i][2] = max(dp[i-1][2],dp[i-1][1]+nums[i])
    // if nums[i] %3 ===2, dp[i][0] = max(dp[i-1][0],dp[i-1][1]+nums[i])
    //                      dp[i][1] = max(dp[i-1][1],dp[i-1][2]+nums[i])
    //                      dp[i][2] = max(dp[i-1][2],dp[i-1][0]+nums[i])
    // ans = dp[n][0];

    const n = nums.length;

    //j从余数来看，取值为0，1，2

    // dp
    const dp = [];
    for (let i = 0; i <= n; i++) {
        const cur = Array(3).fill(-Infinity);
        dp.push(cur);
    }

    // base case
    // dp[0][..]
    // dp[..][0]
    dp[0][0] = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= 2; j++) {
            const num = nums[i - 1];
            const x = num % 3;
            if (x === 0) {
                dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][0] + num);
                dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][1] + num);
                dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][2] + num);
            } else if (x === 1) {
                dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] + num);
                dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + num);
                dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + num);
            } else if (x === 2) {
                dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + num);
                dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][2] + num);
                dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][0] + num);
            }
        }
    }
   


    return dp[n][0];

};