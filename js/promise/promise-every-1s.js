// 使用Promise实现每隔1秒输出1,2,3

const res = [1, 2, 3];

res.reduce((p, cur) => {
    return p.then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(cur);
                resolve();
            }, 1000);
        });
    });
}, Promise.resolve());
