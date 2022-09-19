## deepClone
```js
function deepClone(obj) {
    if (typeof obj !== 'object' || obj === null) return obj;
    let ans = Array.isArray(obj) ? [] : {};
    for (let k in obj) {
        ans[k] = deepClone(obj[k]);
    }
    return ans;
}

const a = {a: {b: [1, 2, 3]}};
console.log(deepClone(a));
const b = [1, 2, 3];
console.log(deepClone(b));
```