/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function (n) {
    // dp[i][j] := 长度为i，且最后一位是j的数量
    // dp[i][j] = dp[i - 1][KEY.e] + dp[i - 1][KEY.i] + dp[i - 1][KEY.u], j===a 0
    //          = dp[i - 1][KEY.a] + dp[i - 1][KEY.i], j===e 1
    //          = dp[i - 1][KEY.e] + dp[i - 1][KEY.o], j===i 2
    //          = dp[i - 1][KEY.i], j===o 3
    //          = dp[i - 1][KEY.i] + dp[i - 1][KEY.o], j===u 4
    // ans = sum(dp[n][a..u])

    // 0=>a
    // 1=>e
    // 2=>i
    // 3=>o
    // 4=>u

    let dp = Array(5).fill(0);
    let odp = Array(5).fill(0);
    // base case
    // dp[0][..] = 0
    // dp[1][..] = 1
    for (let j = 0; j < 5; j++) {
        dp[j] = 1;
        odp[j] = 1; // copy
    }

    const KEY = {
        a: 0,
        e: 1,
        i: 2,
        o: 3,
        u: 4,
    };

    for (let i = 2; i <= n; i++) {
        for (let j = 0; j <= 4; j++) {
            // dp[i][j] = dp[i-1][j] * strategy[j];
            let t;
            if (j === KEY.a) {
                //a
                t = odp[KEY.e] + odp[KEY.i] + odp[KEY.u];
            } else if (j === KEY.e) {
                //e
                t = odp[KEY.a] + odp[KEY.i];
            } else if (j === KEY.i) {
                //i
                t = odp[KEY.e] + odp[KEY.o];
            } else if (j === KEY.o) {
                //o
                t = odp[KEY.i];
            } else if (j === KEY.u) {
                //u
                t = odp[KEY.i] + odp[KEY.o];
            }
            t = t % (Math.pow(10, 9) + 7);
            dp[j] = t;
        }
        // swap
        let tmp = odp;
        odp = dp;
        dp = tmp;
    }

    //swap back
    dp = odp;

    let sum = 0;
    for (let j = 0; j <= 4; j++) {
        sum += dp[j] % (Math.pow(10, 9) + 7);
    }
    return sum % (Math.pow(10, 9) + 7);
};
