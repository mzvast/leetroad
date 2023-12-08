const visited = new WeakSet();
function sizeOfObject(obj) {
    if (obj === null) return 0;
    let ans = 0;
    for (let k in obj) {
        ans += calculator(k); // 每个key都占空间
        if (typeof obj[k] === 'object') {
            if (obj[k] === null || visited.has(obj[k])) continue;
            visited.add(obj[k]);
        }

        ans += calculator(obj[k]);
    }
    return ans;
}

function calculator(obj) {
    switch (typeof obj) {
        case 'string':
            return obj.length * 2; // utf16
        case 'number':
            return 8; // 64bit
        case 'boolean':
            return 4; // 32bit
        case 'object': {
            if (Array.isArray(obj)) {
                return obj.map(calculator).reduce((pre, cur) => pre + cur, 0);
            } else {
                return sizeOfObject(obj);
            }
        }
    }
}
let obj = {c: true};
console.log(sizeOfObject({a: 111, b: 'cccc', c: obj, d: obj}));
