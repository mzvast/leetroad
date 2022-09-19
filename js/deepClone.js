// 简陋版本
function deepClone(obj) {
    if (typeof obj !== 'object') return obj; // primitive
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
const c = 1;
console.log(deepClone(c));
