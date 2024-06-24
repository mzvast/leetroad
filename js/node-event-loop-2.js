console.log(1);
new Promise(function (resolve, reject) {
    console.log(2);
    resolve(3);
}).then(function (x) {
    console.log(x);
});
process.nextTick(function () {
    console.log(4);
});
setImmediate(function () {
    console.log(5);
});

setTimeout(function () {
    console.log(6);
}, 0);
