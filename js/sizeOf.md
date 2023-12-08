## 实现 sizeOf 函数，传入一个参数 object，计算这个 object 占用了多少 bytes？

%

```js
// 对象的key占用空间
// 相同对象不再占用空间，但key依然要加

function calculator(object) {
    switch (typeof object) {
        case 'string': {
            return object.length * 2; // 16bit every string
        }
        case 'boolean': {
            return 4; // 32 bit system
        }
        case 'number': {
            return 8; // 64 bit
        }
        case 'object': {
            if (Array.isArray(object)) {
                return object
                    .map(calculator)
                    .reduce((pre, cur) => pre + cur, 0);
            } else {
                return sizeOfObject(object);
            }
        }
    }
}

const visited = new WeakSet();

function sizeOfObject(object) {
    if (object === null) return 0;
    let ans = 0;

    for (let key in object) {
        // 计算key
        ans += calculator(key);
        if (typeof object[key] === 'object') {
            if (obj[k] === null || visited.has(obj[k])) continue;
            visited.add(object[key]);
        }
        // 计算值
        ans += calculator(object[key]);
    }

    return ans;
}

console.log(sizeOfObject({a: 111, b: 'cccc'}));
```
