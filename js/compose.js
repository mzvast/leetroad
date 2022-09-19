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
function compose(...funcs) {
    return (initVal) => funcs.reduceRight((x, f) => f(x), initVal);
}
// reduce
// function compose(...funcs) {
//     return funcs.reduce(
//         (a, b) =>
//             (...args) =>
//                 a(b(...args))
//     );
// }

//pre: (...args)=>fn1(fn2(...args))
// (...args) => ((...t)=>fn1(fn2(...t)))(fn3(...args))
// 令 x = fn3(...args)
// (...args) => ((...t)=>fn1(fn2(...t)))(x)
// (...args) => fn1(fn2(x))
// 还原 x
// (...args) => fn1(fn2(fn3(...args)))
