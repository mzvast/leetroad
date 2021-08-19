function myNew(ctor, ...args) {
    const obj = {};
    obj.__proto__ = ctor.prototype;
    const ret = ctor.call(obj, ...args);
    return ret ? ret : obj;
}
