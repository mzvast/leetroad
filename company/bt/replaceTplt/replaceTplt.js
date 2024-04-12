function replace(str, data) {
    return str.replace(/\$\{(\w+)\}/g, (match, key) => {
        return data[key] ?? match;
    });
}

function replace2(str, data) {
    let ans = '';

    for (let i = 0; i < str.length; i++) {
        // look forward
        if (str[i] === '$' && str[i + 1] === '{') {
            i += 2; // first key char
            let key = '';
            while (str[i] !== '}') key = key + str[i++];
            ans = ans + data[key];
        } else {
            ans = ans + str[i];
        }
    }

    return ans;
}
const ans = replace('${name} is ${age}, ${name} is happy', {
    name: 'John',
    age: 25,
});
console.log(ans);
