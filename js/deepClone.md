## deepClone
```js
function deepClone(obj) {
    const ans = obj instanceof Array ? [] : {};
    for (let key in obj) {
        ans[key] =
            typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
    }
    return ans;
}
const a = {a: {b: [1, 2, 3]}};
console.log(deepClone(a));
const b = [1, 2, 3];
console.log(deepClone(b));
```