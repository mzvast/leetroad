// dp 减少空间复杂度
const memo = {};
function fib(n) {
    if (n === 1 || n === 2) return 1;
    // const dp = new Array(n + 1).fill(0);
    // base case
    let pre = (curr = 1);
    for (let i = 3; i <= n; i++) {
        let sum = pre + curr;
        pre = curr;
        curr = sum;
    }
    return curr;
}

console.time();
console.log(fib(30));
console.timeEnd();
