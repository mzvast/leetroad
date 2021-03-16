// dp
const memo = {};
function fib(n) {
    if (n === 1 || n === 2) return 1;
    const dp = new Array(n + 1).fill(0);
    // base case
    dp[1] = dp[2] = 1;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

console.time();
console.log(fib(30));
console.timeEnd();
