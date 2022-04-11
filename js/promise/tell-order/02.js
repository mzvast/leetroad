console.log('start');
setTimeout(() => {
    console.log('children2');
    Promise.resolve().then(() => {
        console.log('children3');
    });
}, 0);

new Promise((resolve, reject) => {
    console.log('children4');
    setTimeout(() => {
        console.log('children5');
        resolve('children6');
    }, 0);
}).then((res) => {
    console.log('children7');
    setTimeout(() => {
        console.log(res);
    }, 0);
});

// start
// children4
// children2 //! 重要 在一个宏任务和另一个宏任务之间如果有微任务，会先清空微任务队列
// children3
// children5
// children7
// children6
