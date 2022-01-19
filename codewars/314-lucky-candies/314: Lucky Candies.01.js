// https://www.codewars.com/kata/592e5d8cb7b59e547c00002f

// test([1,2,3,4,5], 5, 15);
// test([1,2,3,4,5], 7, 14);
// test([1,2,3,4,5], 8, 8);
// test([10,20,30,40,50], 10, 150);
// test([50,40,30,20,10], 9, 90);
// test(Array(15).fill(1), 8, 8);
// test([5000000,4000000,3000000,2000000,1000000], 9, 9000000);

function luckyCandies(prizes, k) {
    // dp[i][j] := 到第i个数，除以k余数为j的最大值
    // let p = prizes[i-1];
    // dp[i][j] =
    // if(p%k === 0) dp[i][j] = max(dp[i - 1][j],dp[i - 1][j]+p)
    // if(p%k === 1) dp[i][0] = max(dp[i - 1][0],dp[i - 1][-1]+p)
    //               dp[i][1] = max(dp[i - 1][1],dp[i - 1][0]+p)
    //               dp[i][2] = max(dp[i - 1][2],dp[i - 1][1]+p)
    // ...           dp[i][k-1] = max(dp[i - 1][k-1],dp[i - 1][k-2]+p)
    // if(p%k === k-1) dp[i][j] = ...

    // 0<=i <=prizes.length
    // 0<=k <= sum(prizes)

    const n = prizes.length;

    const dp = Array(n + 1)
        .fill(0)
        .map(() => Array(k).fill(-Infinity));

    // base case
    dp[0][0] = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < k; j++) {
            const p = prizes[i - 1];
            const x = p % k;
            for (let y = 0; y < k; y++) {
                const re = y - x < 0 ? k + y - x : y - x;
                dp[i][y] = Math.max(dp[i - 1][y], dp[i - 1][re] + p);
            }
        }
    }

    return dp[n][0];
}

// console.log(luckyCandies([50, 40, 30, 20, 10], 9));
// console.log(luckyCandies([1, 2, 3, 4, 5], 7));

const test = (a, b, c) => {
    const ans = luckyCandies(a, b);
    console.log(a, b, ans, ans === c);
    return ans === c;
};

test([1, 2, 3, 4, 5], 5, 15);
test([1, 2, 3, 4, 5], 7, 14);
test([1, 2, 3, 4, 5], 8, 8);
test([10, 20, 30, 40, 50], 10, 150);
test([50, 40, 30, 20, 10], 9, 90);
test(Array(15).fill(1), 8, 8);
test([5000000, 4000000, 3000000, 2000000, 1000000], 9, 9000000);
