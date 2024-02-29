// 实现一个compose函数，用法如下：
function fn1(x) {
    console.log('1');
    return x + 1;
}

function fn2(x) {
    console.log('2');
    return x + 2;
}
function fn3(x) {
    console.log('3');
    return x + 3;
}
function fn4(x) {
    console.log('4');
    return x + 4;
}

const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+4+3+2+1=11

// `compose(f, g, h)` is identical to doing
//  `(...args) => f(g(h(...args)))`.
// reduceRight
// https://sourcegraph.com/github.com/WaterfoxCo/Waterfox/-/blob/devtools/shared/ThreadSafeDevToolsUtils.js?L222:16
function compose(...funcs) {
    return (val) => funcs.reduceRight((acc, fn) => fn(acc), val);
}

function pipe(...funcs) {
    return (val) => funcs.reduce((acc, fn) => fn(acc), val);
}

const b = pipe(fn1, fn2, fn3, fn4);
console.log(b(1));
