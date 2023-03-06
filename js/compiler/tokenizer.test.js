const input = '(add 2 (subtract 4 2))';
const {tokenizer} = require('./tokenizer');
console.log(tokenizer(input));
