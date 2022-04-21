## Currying

```js
// 实现currying函数支持如下调用
const add = (a, b, c) => a + b + c;
const a1 = currying(add, 1);
const a2 = a1(2);
console.log(a2(3));
```

%

```js
function currying(fn, ...args) {
    const originalArgsLength = fn.length;
    let allArgs = [...args];
    return function resFn(...newArgs) {
        allArgs = [...allArgs, ...newArgs];
        if (allArgs.length === originalArgsLength) {
            // 参数数量够了
            return fn(...allArgs);
        } else {
            return resFn; // 继续收集
        }
    };
}

const add = (a, b, c) => a + b + c;
const a1 = currying(add, 1);
const a2 = a1(2);
console.log(a2(3));
```
