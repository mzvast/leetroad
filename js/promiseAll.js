const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
        // reject('fuck');
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

PromiseAll([p1, p2, p3])
    .then((res) => {
        console.log(res); // 3秒后返回 [ 1, 2, 3 ]
    })
    .catch((err) => {
        console.error(err);
    });

function PromiseAll(promiseArr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promiseArr)) return reject('only accept array');

        const n = promiseArr.length;

        let cnt = 0;
        let ans = Array(n);
        for (let i = 0; i < n; i++) {
            promiseArr[i]
                .then((res) => {
                    cnt += 1;
                    ans[i] = res;
                    if (cnt === n) resolve(ans);
                })
                .catch((err) => reject(err));
        }
    });
}
