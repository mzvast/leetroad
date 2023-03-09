import {describe, test, it, expect} from 'vitest';
import {lexer} from './lexer';
import {parser} from './parser';

describe('parser works', () => {
    test('should first', () => {
        const tokens = lexer(`let x = 1;
		let y = 7;
		
		if y > x {
		    print("Hello world!");
		}`);
        const ast = parser(tokens);
        expect(ast).toEqual([
            {type: 'variable-declaration', name: 'x', varType: 'let'},
            {
                type: 'function-call',
                function: '=',
                args: [
                    {type: 'number', value: 1},
                    {type: 'identifier', name: 'x'},
                ],
            },
            {type: 'variable-declaration', name: 'y', varType: 'let'},
            {
                type: 'function-call',
                function: '=',
                args: [
                    {type: 'number', value: 7},
                    {type: 'identifier', name: 'y'},
                ],
            },
            {
                type: 'if',
                condition: {
                    type: 'function-call',
                    function: '>',
                    args: [
                        {type: 'identifier', name: 'x'},
                        {type: 'identifier', name: 'y'},
                    ],
                },
                body: [
                    {
                        type: 'function-call',
                        function: 'print',
                        args: [{type: 'string', value: 'Hello world!'}],
                    },
                ],
            },
        ]);
    });
});
