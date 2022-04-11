## 实现bind方法
```js
Function.prototype.bind = function (obj, ...args) {
    const fn = this;
    const bound = function (...moreArgs) {
        return fn.call(obj, ...args, ...moreArgs);
    };

    // 考虑到原型链，new一个bind过的新函数，要继承原函数的原型
    const F = function () {};
    F.prototype = fn.prototype;
    bound.prototype = new F();
    return bound;
};

function test(a, b, c) {
    return a + b + c;
}
// const obj = {a: 1, b: 2, c: 3};

const fn = test.bind(this, 1);

console.log(fn(2, 3));
```