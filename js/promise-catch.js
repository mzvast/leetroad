// promise的错误处理
function refresh() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //     resolve();
            reject();
        }, 1000);
    });
}

var p = new Promise((resolve, reject) => {
    resolve(1);
    //     reject('error');
})
    .catch(async (err) => {
        console.log(err);
        //     return new Promise((resolve, reject) => {
        //         resolve(1);
        //     });
        await refresh();
    })
    .then((res) => {
        console.log('hehe', res);
    })
    .catch(() => {
        console.log('oh no');
    });

p.then((res) => {
    console.log(res);
});
