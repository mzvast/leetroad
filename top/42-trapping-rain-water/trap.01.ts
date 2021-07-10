/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    // 每个位置的储水量=左右两边最高值的最小值减去自身高度（>0)
    // L[i] := 从0:i的最大高度
    // R[i] := 从i:n-1的最大高度
    // dp[i] := 某一个位置的储水量
    // dp[i] = min(L[i],R[i]) - height[i] (if>0)
    const n = height.length;
    let L = Array(n).fill(0),
        R = Array(n).fill(0),
        dp = Array(n).fill(0);

    L[0] = height[0];
    for (let i = 1; i < n; i++) {
        L[i] = Math.max(L[i - 1], height[i]);
    }
    R[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        R[i] = Math.max(R[i + 1], height[i]);
    }
    for (let i = 1; i < n - 1; i++) {
        const delta = Math.min(L[i - 1], R[i + 1]) - height[i];

        if (delta > 0) {
            dp[i] = delta;
        }
    }
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += dp[i];
    }
    // console.log(L);
    // console.log(R);
    // console.log(dp);
    return sum;
};
