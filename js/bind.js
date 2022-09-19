Function.prototype.bind = function (obj, ...args) {
    const fn = this;
    const bound = function (...moreArgs) {
        return fn.call(obj, ...args, ...moreArgs);
    };
    // 原型
    //     const F = function () {};
    //     F.prototype = fn.prototype;
    bound.prototype = Object.create(fn.prototype);
    return bound;
};

function test(a, b, c) {
    return a + b + c;
}
// const obj = {a: 1, b: 2, c: 3};

const fn = test.bind(this, 1);

console.log(fn(2, 3));
