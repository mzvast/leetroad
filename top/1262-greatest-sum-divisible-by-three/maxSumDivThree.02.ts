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
    let dp = Array(3).fill(-Infinity);
    // for (let i = 0; i <= n; i++) {
    //     const cur = Array(3).fill(-Infinity);
    //     dp.push(cur);
    // }

    // base case
    // dp[0][..]
    // dp[..][0]
    dp[0] = 0;
    let odp = Array(3).fill(-Infinity);
    odp[0] = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= 2; j++) {
            const num = nums[i - 1];
            const x = num % 3;
            if (x === 0) {
                dp[0] = Math.max(odp[0], odp[0] + num);
                dp[1] = Math.max(odp[1], odp[1] + num);
                dp[2] = Math.max(odp[2], odp[2] + num);
            } else if (x === 1) {
                dp[0] = Math.max(odp[0], odp[2] + num);
                dp[1] = Math.max(odp[1], odp[0] + num);
                dp[2] = Math.max(odp[2], odp[1] + num);
            } else if (x === 2) {
                dp[0] = Math.max(odp[0], odp[1] + num);
                dp[1] = Math.max(odp[1], odp[2] + num);
                dp[2] = Math.max(odp[2], odp[0] + num);
            }
        }
        [dp, odp] = [odp, dp] // swap
    }



    return odp[0];

};