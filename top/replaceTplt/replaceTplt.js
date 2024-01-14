function replace(str, data) {
    return str.replace(/\$\{(\w+)\}/g, (match, key) => {
        return data[key] ?? match;
    });
}
const ans = replace('${name} is ${age}, ${name} is happy', {
    name: 'John',
    age: 25,
});
console.log(ans);
