// ## 实现myCall
Function.prototype.myCall = function (context, ...args) {
    context = Object(context);
    const fn = this;
    context.fn = fn;
    const ans = context.fn(...args);
    delete context.fn;

    return ans;
};

console.log(Math.max.myCall(null, 1, 2)); // 2
