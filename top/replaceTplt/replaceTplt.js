function replace(str, data) {
    const reg = /\$\{([a-zA-Z]+)\}/g;
    return str.replace(reg, function (match, $1) {
        return data[$1];
    });
}
const ans = replace('${name} is ${age}, ${name} is happy', {
    name: 'John',
    age: 25,
});
console.log(ans);
