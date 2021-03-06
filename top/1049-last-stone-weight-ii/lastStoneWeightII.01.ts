/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
    /**
	分成两组
	target = Sp - Sn
	target+ Sn = (Sp + Sn) - Sn
	target = S - 2Sn
	转化为求Sn的最大值
	0<=Sn<=S/2
	
	空间为S/2的0-1背包问题
	dp[i][j] := 到第i个石头为止，能否凑成重量j
	dp[i][j] = dp[i-1][j] , (j< stones[i]) 装不下了
		    dp[i-1][j] || dp[i-1][j-stones[i]], (j>= stones[i]) 还有空间
	ans = max j of dp[i][j] is true
	 */

    let sum = 0;
    for (let stone of stones) sum += stone;
    const S = Math.floor(sum / 2); // 不能超过，所以向下取整数
    const n = stones.length;
    let dp = [];
    // i 0~n, j 0~S
    for (let i = 0; i <= n; i++) {
        const cur = Array(S + 1).fill(false);
        dp.push(cur);
    }
    // base case
    // dp[0][..] =false, dp[..][0] = true
    for (let i = 0; i <= n; i++) {
        dp[i][0] = true;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= S; j++) {
            if (j >= stones[i - 1]) {
                //还有空间
                dp[i][j] =
                    dp[i - 1][j] || // 不装
                    dp[i - 1][j - stones[i - 1]]; // 装
            } else {
                dp[i][j] = dp[i - 1][j]; // 不装
            }
        }
    }
    let Sn = 0;
    // 倒着找
    for (let j = S; j >= 0; j--) {
        if (dp[n][j]) {
            Sn = j;
            break;
        }
    }
    // ans
    return sum - 2 * Sn;
};
