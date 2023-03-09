import {Token} from './types.js';

export function lexer(smol: string) {
    const chars = smol.split('');

    const tokens: Token[] = [];

    while (chars.length > 0) {
        const char = chars.shift();
        const next = chars[0];

        // terminator
        if (char === ';') {
            tokens.push({
                type: 'terminator',
                value: char,
            });
            continue;
        }
    }
}

// utils

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
