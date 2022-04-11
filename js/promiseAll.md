## 实现PromiseAll
```js
// test case

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 2000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3);
    }, 3000);
});

PromiseAll([p1, p2, p3]).then((res) => {
    console.log(res); // 3秒后返回 [ 1, 2, 3 ]
});
```
%
```js
function PromiseAll(promiseArr) {
    return new Promise((resolve, reject) => {
        if(!Array.isArray(promiseArr)) return reject(new Error('传入的参数必须是数组'))
        const ans = [];
        const n = promiseArr.length;
        let cnt = 0;
        for (let i = 0; i < n; i++) {
            Promise.resolve(promiseArr[i])
                .then((res) => {
                    cnt += 1;
                    ans[i] = res;
                    if (cnt === n) {
                        resolve(ans);
                    }
                })
                .catch((e) => reject(e));
        }
    });
}


```