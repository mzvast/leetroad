import {Token} from './types.js';

export function lexer(smol: string) {
    const chars = smol.split('');

    const tokens: Token[] = [];

    while (chars.length > 0) {
        const char = chars.shift();
        const next = chars[0]; // peek

        if (char == undefined) throw new Error('invalid char');

        // terminator
        if (char === ';') {
            tokens.push({
                type: 'terminator',
                value: char,
            });
            continue;
        }

        if (isLetter(char)) {
            // 可能是keyword、bool、operator、identifier
            const word = `${char}${extractWord(chars)}`;

            if (isKeyword(word)) {
                tokens.push({type: 'keyword', value: word});
                continue;
            }

            if (isOperator(word)) {
                tokens.push({type: 'operator', value: word});
                continue;
            }

            if (isBool(word)) {
                tokens.push({type: 'boolean', value: word});
                continue;
            }

            tokens.push({type: 'identifier', value: word});
            continue;
        }

        // 处理数字
        if (isNum(char)) {
            const num = `${char}${extractNum(chars)}`;
            tokens.push({type: 'number', value: num});
            continue;
        }
        // 负数
        if (char === '-' && isNum(next!)) {
            const num = `-${extractNum(chars)}`;
            tokens.push({type: 'number', value: num});
            continue;
        }

        // 字符串
        if (char === '"') {
            tokens.push({type: 'string', value: extractString(chars)});
            continue;
        }

        // 非字母的操作符
        if (isOperator(char)) {
            // 前缀匹配，补全
            const fullOp = `${char}${extractOperator(chars)}`;

            if (!isOperator(fullOp)) {
                throw new TypeError(`invalid operator:${fullOp}`);
            }

            tokens.push({type: 'operator', value: fullOp});
            continue;
        }

        if (isWhiteSpace(char)) continue;

        if (isLeftCurly(char)) {
            tokens.push({type: 'left-curly', value: char});
            continue;
        }

        if (isRightCurly(char)) {
            tokens.push({type: 'right-curly', value: char});
            continue;
        }

        if (isPipe(char)) {
            tokens.push({type: 'pipe', value: char});
            continue;
        }

        if (isComma(char)) {
            tokens.push({type: 'comma', value: char});
            continue;
        }

        if (isLeftParen(char)) {
            tokens.push({type: 'left-paren', value: char});
            continue;
        }

        if (isRightParen(char)) {
            tokens.push({type: 'right-paren', value: char});
            continue;
        }

        throw new Error('Unexpected token:' + char);
    }

    return tokens;
}

// utils

const isWhiteSpace = (char: string) => /\s/.test(char);

const isLeftCurly = (char: string) => char === '{';
const isRightCurly = (char: string) => char === '}';
const isPipe = (char: string) => char === '|';
const isLeftParen = (char: string) => char === '(';
const isRightParen = (char: string) => char === ')';
const isComma = (char: string) => char === ',';

const operators = [
    '+',
    '-',
    '*',
    '/',
    '=',
    '==',
    'and',
    'or',
    'xor',
    '<',
    '>',
    '>=',
    '<=',
    '<>',
    '=>',
    '.',
    '?',
];

const keywords = [
    'let',
    'var',
    'for',
    'in',
    'return',
    'break',
    'continue',
    'if',
    'else',
    'elif',
];

const isLetter = (char: string) => /[a-z]/i.test(char);

const isNum = (char: string) => /[0-9]/.test(char);

const isOperator = (str: string) => operators.indexOf(str) > -1;

const isKeyword = (str: string) => keywords.indexOf(str) > -1;

const isBool = (str: string) => str === 'true' || str === 'false';

// 一个单词
const extractWord = (chars: string[]) => {
    let word = '';
    while (isLetter(chars[0]) || isNum(chars[0])) {
        word += chars.shift();
    }
    return word;
};

// 一个数字，支持小数，中间可以有一个点
const extractNum = (chars: string[]) => {
    let num = '';
    let hasHeadDot = false;

    while (chars.length > 0) {
        const next = chars[0]; // peek

        if (next === '.' && hasHeadDot) break; // 第二次遇到点
        if (next === '.') {
            // 第一次遇到点
            hasHeadDot = true;
            num += chars.shift();
            continue;
        }
        if (isNum(next)) {
            num += chars.shift();
            continue;
        }
        break;
    }

    return num;
};
// 字符串
const extractString = (chars: string[]) => {
    let string = '';
    while (chars.length > 0) {
        const char = chars.shift();
        if (char === '"') break;
        string += char;
    }
    return string;
};

// 操作符
const extractOperator = (chars: string[]) => {
    let operator = '';

    while (isOperator(chars[0])) {
        operator += chars.shift();
    }

    return operator;
};
