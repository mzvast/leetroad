export const tokens = [
    {type: 'paren', value: '('},
    {type: 'name', value: 'add'},
    {type: 'number', value: '2'},
    {type: 'paren', value: '('},
    {type: 'name', value: 'subtract'},
    {type: 'number', value: '4'},
    {type: 'number', value: '2'},
    {type: 'paren', value: ')'},
    {type: 'paren', value: ')'},
];
export const ast = {
    type: 'Program',
    body: [
        {
            type: 'CallExpression',
            name: 'add',
            params: [
                {
                    type: 'NumberLiteral',
                    value: '2',
                },
                {
                    type: 'CallExpression',
                    name: 'subtract',
                    params: [
                        {
                            type: 'NumberLiteral',
                            value: '4',
                        },
                        {
                            type: 'NumberLiteral',
                            value: '2',
                        },
                    ],
                },
            ],
        },
    ],
};

export const input = '(add 2 (subtract 4 2))';
export const output = 'add(2,subtract(4,2));';
export const newAst = {
    type: 'Program',
    body: [
        {
            type: 'ExpressionStatement',
            expression: {
                type: 'CallExpression',
                callee: {
                    type: 'Identifier',
                    name: 'add',
                },
                arguments: [
                    {
                        type: 'NumberLiteral',
                        value: '2',
                    },
                    {
                        type: 'CallExpression',
                        callee: {
                            type: 'Identifier',
                            name: 'subtract',
                        },
                        arguments: [
                            {
                                type: 'NumberLiteral',
                                value: '4',
                            },
                            {
                                type: 'NumberLiteral',
                                value: '2',
                            },
                        ],
                    },
                ],
            },
        },
    ],
};
