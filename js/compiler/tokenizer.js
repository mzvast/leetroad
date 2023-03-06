function tokenizer(input) {
    let current = 0;
    let tokens = [];
    while (current < input.length) {
        let char = input[current];
        if (char === '(' || char === ')') {
            tokens.push({
                type: 'paren',
                value: char,
            });
            current += 1;
            continue;
        }
        const WHITESPACE = /\s/;
        if (WHITESPACE.test(char)) {
            current += 1;
            continue;
        }

        const NUMBER = /[0-9]/;
        if (NUMBER.test(char)) {
            let value = '';
            while (NUMBER.test(char)) {
                value = value + char;
                char = input[++current]; // move cursor
            }
            tokens.push({
                type: 'number',
                value,
            });
            continue;
        }

        if (char === '"') {
            let value = '';
            char = input[++current]; // start from next
            while (input[char] !== '"') {
                value = value + char;
                char = input[++current];
            }
            tokens.push({
                type: 'string',
                value,
            });
            // skip the last quote
            input += 1;
            continue;
        }

        const LETTER = /[a-z]/;
        if (LETTER.test(char)) {
            let value = '';
            while (LETTER.test(char)) {
                value = value + char;
                char = input[++current];
            }
            tokens.push({
                type: 'name',
                value,
            });
            continue;
        }
    }
    return tokens;
}



module.exports = {
    tokenizer,
};
