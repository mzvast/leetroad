## download(url):Promise
// 限制3个并发
```js
let currentCnt = 0;
const LIMIT = 3;
const pending = [];

function fetch(url) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(url);
        }, 1000);
    });
}

function run() {
    if (currentCnt === LIMIT || pending.length === 0) return;
    const p = pending.shift();
    p();
}

function download(url) {
    return new Promise((resolve, reject) => {
        const p = () => {
            currentCnt += 1;
            fetch(url)
                .then((res) => {
                    resolve(res);
                    console.log(res);
                })
                .catch((err) => reject(err))
                .finally(() => {
                    currentCnt -= 1;
                    run();
                });
        };
        if (currentCnt === LIMIT) {
            pending.push(p);
            return;
        }
        p();
    });
}

for (let i = 0; i < 10; i++) {
    download('url' + i);
}
```