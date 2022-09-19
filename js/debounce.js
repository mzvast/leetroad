// test cases

const f = debounce((v) => console.log(v), 100); // 每100ms
f(1);
f(2);
f(3);

function debounce(handler, delay) {
    let timer = null;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            handler(...args);
        }, delay);
    };
}
