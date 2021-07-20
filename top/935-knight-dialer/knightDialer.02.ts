/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function (n) {
    // dp[k][i][j] := 第k步在i，j的走法
    // dp[0][i][j] = 1 对于每次放下都是1
    // ans = sum{dp[n][i][j]} 对于每个位置i,j

    const dp = Array(2)
        .fill(0)
        .map(() =>
            Array(4)
                .fill(0)
                .map(() => Array(3).fill(0))
        );
    // base case
    dp[0][3][0] = 0;
    dp[0][3][2] = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            dp[0][i][j] = 1;
        }
    }
    dp[0][3][0] = 0;
    dp[0][3][2] = 0;
    // console.log(dp[0])

    // strategy
    const options = [
        {
            x: 2,
            y: 1,
        },
        {
            x: 1,
            y: 2,
        },
        {
            x: 2,
            y: -1,
        },
        {
            x: 1,
            y: -2,
        },
        {
            x: -2,
            y: -1,
        },
        {
            x: -1,
            y: -2,
        },
        {
            x: -2,
            y: 1,
        },
        {
            x: -1,
            y: 2,
        },
    ];
    for (let k = 1; k < n; k++) {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 3; j++) {
                dp[1][i][j] = 0;
                if (!isInArea(i, j)) continue;
                for (let option of options) {
                    const [_i, _j] = [i - option.x, j - option.y];
                    if (isInArea(_i, _j)) {
                        dp[1][i][j] = mod(dp[1][i][j] + dp[0][_i][_j]);
                    }
                }
            }
        }
        [dp[0], dp[1]] = [dp[1], dp[0]];
    }

    let sum = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            if (isInArea(i, j)) {
                // console.log(i, j)
                sum = mod(sum + dp[0][i][j]);
            }
        }
    }

    return sum;

    function isInArea(i, j) {
        let res;

        if (i === 3) {
            // console.log(i, j, '不在')
            res = j === 1;
        } else {
            res = i >= 0 && i < 3 && j >= 0 && j < 3;
        }
        // console.log(i, j, res)
        return res;
    }

    function mod(x) {
        return x % (1e9 + 7);
    }
};
