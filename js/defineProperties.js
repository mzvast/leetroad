var a = {},
    b = {};
Object.defineProperties(b, {
    x: {
        // enumerable: true, // 默认是false，不可枚举，所以Object.assign无法赋值

        get: function () {
            return 1;
        },
    },
});
Object.assign(a, b);
console.log(b.x, a.x); // 1 undefined
