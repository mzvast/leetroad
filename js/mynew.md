## 实现new函数
```js
function myNew(ctor, ...args) {
    const obj = {};
    obj.__proto__ = ctor.prototype;
    const ret = ctor.apply(obj, args);
    return ret ? ret : obj;
}
```