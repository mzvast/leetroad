import {describe, test, it, expect} from 'vitest';
import {lexer} from './lexer';
import {parser} from './parser';
// import {parser} from './ansParser';

describe('parser works', () => {
    test('should first', () => {
        const tokens = lexer(`let x = 1;
		let y = 7;
		
		if y > x {
		    print("Hello world!","next");
		}`);
        // console.log("🚀 ~ file: parser.test.ts:14 ~ test ~ tokens", tokens)
        const ast = parser(tokens);
        expect(ast).toEqual([
            {type: 'variable-declaration', name: 'x', varType: 'let'},
            {
                type: 'function-call',
                function: '=',
                args: [
                    {type: 'identifier', name: 'x'},
                    {type: 'number', value: 1},
                ],
            },
            {type: 'variable-declaration', name: 'y', varType: 'let'},
            {
                type: 'function-call',
                function: '=',
                args: [
                    {type: 'identifier', name: 'y'},
                    {type: 'number', value: 7},
                ],
            },
            {
                type: 'if',
                condition: {
                    type: 'function-call',
                    function: '>',
                    args: [
                        {type: 'identifier', name: 'y'},
                        {type: 'identifier', name: 'x'},
                    ],
                },
                body: [
                    {
                        type: 'function-call',
                        function: 'print',
                        args: [
                            {type: 'string', value: 'Hello world!'},
                            {type: 'string', value: 'next'},
                        ],
                    },
                ],
            },
        ]);
    });

    test('should work math', () => {
        const tokens = lexer(`let x = 2*(3+4);`);
        const ast = parser(tokens);

        expect(ast).toEqual([
            {
                type: 'variable-declaration',
                name: 'x',
                varType: 'let',
            },
            {
                type: 'function-call',
                function: '=',
                args: [
                    {
                        type: 'identifier',
                        name: 'x',
                    },
                    {
                        type: 'function-call',
                        function: '*',
                        args: [
                            {
                                type: 'number',
                                value: 2,
                            },
                            {
                                type: 'function-call',
                                function: '+',
                                args: [
                                    {
                                        type: 'number',
                                        value: 3,
                                    },
                                    {
                                        type: 'number',
                                        value: 4,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ]);
    });
});
