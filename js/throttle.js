// 节流
// 时间戳写法
//

function throttle(handler, delay) {
    let last = 0;
    return function throttled(...args) {
        const now = Date.now();
        if (now - last < delay) return;
        last = now;
        handler.apply(this, args);
    };
}

const han = throttle((v) => console.log(v), 1000);

// test cases
// han(1);
// han(2);
// setTimeout(() => {
//     han(3);
// }, 1000);
