// ## 实现new函数
function myNew(ctor, ...args) {
    let obj = {};
    obj.__proto__ = ctor.prototype;
    let res = ctor.apply(obj, args);
    return res ?? obj;
}

// inst -> proto <--> ctor
