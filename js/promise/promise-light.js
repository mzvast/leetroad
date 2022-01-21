// 使用Promise实现红绿灯交替重复亮

function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}

function light(time, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            cb();
            resolve();
        }, time);
    });
}

const loop = () =>
    Promise.resolve()
        .then((resolve) => {
            return light(3000, red);
        })
        .then((resolve) => {
            return light(2000, yellow);
        })
        .then((resolve) => {
            return light(3000, green);
        })
        .then(() => loop());

loop();
