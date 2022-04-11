## 防抖debounce
```js
function debounce(handler, delay) {
    let timer = null;
    return function debounced(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            handler.apply(this, args);
        }, delay);
    };
}

// test cases

const f = debounce((v) => console.log(v), 100);
f(1);
f(2);
f(3);
```