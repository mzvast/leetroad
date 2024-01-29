## replaceTemplate

```js
replace('${name} is ${age}, ${name} is happy', {name: 'John', age: 25})
```

%

```js
function replace(str, dict) {
    let ans = str;
    for (let key in dict) {
        // escape $
	// https://stackoverflow.com/questions/512363/javascript-regex-object-and-the-dollar-symbol
        const reg = new RegExp('\\$' + '{' + key + '}', 'g');
        ans = ans.replace(reg, dict[key]);
    }
    return ans;
}

console.log(replace('${name} is ${age}, ${name} is happy', {name: 'John', age: 25}));
```