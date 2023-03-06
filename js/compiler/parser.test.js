const tokens = [
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

const ast = {
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

const {parser} = require('./parser');

console.log(JSON.stringify(parser(tokens), null, 2));
