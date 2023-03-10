import {describe, test, it, expect} from 'vitest';
import {lexer} from './lexer.js';
import {Token} from './definitions.js';

describe('lexer works', () => {
    test('number should works', () => {
        expect(lexer('10;')).toEqual([
            {
                type: 'number',
                value: '10',
            },
            {
                type: 'terminator',
                value: ';',
            },
        ]);
    });
    test('string should works', () => {
        expect(lexer('"Hello World!";')).toEqual<Token[]>([
            {
                type: 'string',
                value: 'Hello World!',
            },
            {
                type: 'terminator',
                value: ';',
            },
        ]);
    });

    test('bool should works', () => {
        expect(lexer('true;')).toEqual<Token[]>([
            {
                type: 'boolean',
                value: 'true',
            },
            {
                type: 'terminator',
                value: ';',
            },
        ]);
        expect(lexer('false;')).toEqual<Token[]>([
            {
                type: 'boolean',
                value: 'false',
            },
            {
                type: 'terminator',
                value: ';',
            },
        ]);
    });

    test('Constant declaration should works', () => {
        expect(lexer('let x = 5;')).toEqual<Token[]>([
            {
                type: 'keyword',
                value: 'let',
            },
            {
                type: 'identifier',
                value: 'x',
            },
            {
                type: 'operator',
                value: '=',
            },
            {
                type: 'number',
                value: '5',
            },
            {
                type: 'terminator',
                value: ';',
            },
        ]);
    });

    test('Variable declaration should works', () => {
        expect(lexer('var x = 5;')).toEqual<Token[]>([
            {
                type: 'keyword',
                value: 'var',
            },
            {
                type: 'identifier',
                value: 'x',
            },
            {
                type: 'operator',
                value: '=',
            },
            {
                type: 'number',
                value: '5',
            },
            {
                type: 'terminator',
                value: ';',
            },
        ]);
    });
    test('Proper infix notation', () => {
        expect(lexer('let a = 5 * (3 + 4);')).toEqual<Token[]>([
            {
                type: 'keyword',
                value: 'let',
            },
            {
                type: 'identifier',
                value: 'a',
            },
            {
                type: 'operator',
                value: '=',
            },
            {
                type: 'number',
                value: '5',
            },
            {
                type: 'operator',
                value: '*',
            },
            {
                type: 'left-paren',
                value: '(',
            },
            {
                type: 'number',
                value: '3',
            },
            {
                type: 'operator',
                value: '+',
            },
            {
                type: 'number',
                value: '4',
            },
            {
                type: 'right-paren',
                value: ')',
            },
            {
                type: 'terminator',
                value: ';',
            },
        ]);
    });

    test('Function definition', () => {
        expect(
            lexer(`
        let foo = |x, y|{
            if x > y { return x };
        }
        `)
        ).toEqual<Token[]>([
            {type: 'keyword', value: 'let'},
            {type: 'identifier', value: 'foo'},
            {type: 'operator', value: '='},
            {type: 'pipe', value: '|'},
            {type: 'identifier', value: 'x'},
            {type: 'comma', value: ','},
            {type: 'identifier', value: 'y'},
            {type: 'pipe', value: '|'},
            {type: 'left-curly', value: '{'},
            {type: 'keyword', value: 'if'},
            {type: 'identifier', value: 'x'},
            {type: 'operator', value: '>'},
            {type: 'identifier', value: 'y'},
            {type: 'left-curly', value: '{'},
            {type: 'keyword', value: 'return'},
            {type: 'identifier', value: 'x'},
            {type: 'right-curly', value: '}'},
            {type: 'terminator', value: ';'},
            {type: 'right-curly', value: '}'},
        ]);
    });
});
