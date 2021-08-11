function deepClone(obj) {
    let newObj = obj instanceof Array ? [] : {};
    for (let key in obj) {
        newObj[key] =
            typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
    }
    return newObj;
}
const a = {a: {b: [1, 2, 3]}};
console.log(deepClone(a));
const b = [1, 2, 3];
console.log(deepClone(b));
