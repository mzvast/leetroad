// https://juejin.cn/post/6876686095954903048
new Promise((resolve, reject) => {
    console.log(1);
    resolve();
})
    .then((a) => {
        console.log(2);
        new Promise((resolve, reject) => {
            console.log(3);
            resolve();
        })
            .then((c) => {
                console.log(4);
            })
            .then((d) => {
                console.log(6);
            });
    })
    .then((b) => {
        console.log(5);
    });

new Promise((resolve, reject) => {
    console.log(1);
    resolve();
})
    .then((a) => {
        console.log(2);
        return new Promise((resolve, reject) => {
            console.log(3);
            resolve();
        })
            .then((c) => {
                console.log(4);
            })
            .then((d) => {
                console.log(6);
            });
    })
    .then((b) => {
        console.log(5);
    });
