// 加备忘录
const memo = {};
function fib(n) {
    if (n === 1 || n === 2) return 1;
    if (memo[n] !== undefined) return memo[n];
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
}

console.time();
console.log(fib(30));
console.timeEnd();
