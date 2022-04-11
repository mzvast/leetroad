## 节流throttle
```js
// 时间戳写法，第一次立即执行
function throttle(handler, delay) {
    let last = 0;
    return function throttled(...args) {
        const now = Date.now();
        if (now - last < delay) return;
        last = now;
        handler.apply(this, args);
    };
}
```

```js
// 定时器写法，第一次不立即执行
function throttle(handler, delay) {
    let timer = null;
    return function throttled(...args) {
        const context = this;
        if (timer) return;
        timer = setTimeout(() => {
            timer = null;
            handler.apply(context, args);
        }, delay);
    };
}
```

```js
// 结合写法
// 第一次延迟，之后不延迟 就是把上面俩结合了一下
function throttle(handler, delay) {
    let last = 0;
    let timer = null;
    let isFirstTime = true;
    return function throttled(...args) {
        const context = this;
        if (isFirstTime) {
            if (timer) return;
            timer = setTimeout(() => {
                timer = null;
                handler.apply(context, args);
                isFirstTime = false;
            }, delay);
        } else {
            const now = Date.now();
            if (now - last < delay) return;
            last = now;
            handler.apply(this, args);
        }
    };
}
```

```js
// 测试代码
const han = throttle((v) => console.log(v), 1000);

// test cases
han(1);
han(2);
setTimeout(() => {
    han(3);
}, 2000);
```
