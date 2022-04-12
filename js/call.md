## 实现myCall
```js
// foo.myCall(null);
Function.prototype.myCall = function (context, ...args) {
    // 把当前方法挂在对象上
    // 执行并删除方法
    context = Object(this);// 处理null的情况
    context.fn = this; 
    const ans = context.fn(...args);
    delete context.fn;
    return ans;
};

console.log(Math.max.myCall(null, 1, 2)); // 2
```