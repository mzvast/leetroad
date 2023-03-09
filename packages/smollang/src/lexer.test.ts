import {describe, test, it, expect} from 'vitest';
import {lexer} from './lexer.js';
describe('lexer works', () => {
    test('should works', () => {
        expect(lexer('"Hello World!";')).toEqual([
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
});
