setTimeout(function () {
    console.log(1);
}, 0);
new Promise(function (resolve, reject) {
    console.log(2);
    resolve();
})
    .then(function () {
        console.log(3);
    })
    .then(function () {
        console.log(4);
    });
setImmediate(function () {
    console.log(4.5);
});
process.nextTick(function () {
    console.log(5);
});

console.log(6);
