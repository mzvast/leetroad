// https://www.codewars.com/kata/592e5d8cb7b59e547c00002f

// test([1,2,3,4,5], 5, 15);
// test([1,2,3,4,5], 7, 14);
// test([1,2,3,4,5], 8, 8);
// test([10,20,30,40,50], 10, 150);
// test([50,40,30,20,10], 9, 90);
// test(Array(15).fill(1), 8, 8);
// test([5000000,4000000,3000000,2000000,1000000], 9, 9000000);

function luckyCandies(prizes, k) {
    // dp[i][j] := 到第i个数，和为j，是否可以被k整除
    // dp[i][j] = dp[i-1][j] || dp[i-1][j-prizes[i-1]]
    // ans = max j of(dp[i][j] === true)

    // 0<=i <=prizes.length
    // 0<=k <= sum(prizes)

    const n = prizes.length;

    const sum = prizes.reduce((pre, cur, idx) => {
        return pre + cur;
    }, 0);

    const dp = Array(n + 1)
        .fill(0)
        .map(() => Array(sum + 1).fill(false));

    // base case
    // dp[0][..] = true, dp[..][0] = true
    dp[0][0] = true;
    //     for (let j = 0; j <= sum; j++) {
    //         dp[0][j] = true;
    //     }

    //     for (let i = 0; i <= n; i++) {
    //         dp[i][0] = true;
    //     }

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= sum; j++) {
            if (j - prizes[i - 1] >= 0) {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - prizes[i - 1]];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    // 找true的最大j
    for (let i = n; i > 0; i--) {
        for (let j = sum; j > 0; j--) {
            if (dp[i][j] && j % k === 0) {
                return j;
            }
        }
    }
    return 0;
}

// console.log(luckyCandies([50, 40, 30, 20, 10], 9));
// console.log(luckyCandies([1, 2, 3, 4, 5], 7));

const test = (a, b, c) => {
    const ans = luckyCandies(a, b) === c;
    console.log(a, b, ans);
    return ans;
};

test([1, 2, 3, 4, 5], 5, 15);
test([1, 2, 3, 4, 5], 7, 14);
test([1, 2, 3, 4, 5], 8, 8);
test([10, 20, 30, 40, 50], 10, 150);
test([50, 40, 30, 20, 10], 9, 90);
test(Array(15).fill(1), 8, 8);
test([5000000, 4000000, 3000000, 2000000, 1000000], 9, 9000000);
