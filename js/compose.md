## 实现一个 compose 函数

```js
// 实现一个compose函数，用法如下：
function fn1(x) {
    return x + 1;
}

function fn2(x) {
    return x + 2;
}
function fn3(x) {
    return x + 3;
}
function fn4(x) {
    return x + 4;
}

const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+4+3+2+1=11
```

%

```js
// 用reduceRight
function compose(...funcs) {
    return (initVal) => funcs.reduceRight((x, f) => f(x), initVal);
} 
// reduce
function compose(...funcs) {
    return funcs.reduce(
        (a, b) =>
            (...args) =>
                a(b(...args))
    );
}


//pre: (...args)=>fn1(fn2(...args))
// (...args) => ((...t)=>fn1(fn2(...t)))(fn3(...args))
// 令 x = fn3(...args)
// (...args) => ((...t)=>fn1(fn2(...t)))(x)
// (...args) => fn1(fn2(x))
// 还原 x
// (...args) => fn1(fn2(fn3(...args)))
```
