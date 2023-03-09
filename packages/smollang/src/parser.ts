import {AST, Instruction, Token} from './types';

export function parseStatement(tokens: Token[]): Instruction {
    const output: AST = [];
    const operator: Token[] = [];

    while (tokens.length > 0) {
        const token = tokens[0]; // peek

        const {type, value} = token;

        switch (type) {
            case 'number':
                output.push({type, value: +value});
                continue;
            case 'boolean':
                output.push({type, value: token.value == 'true'});
                continue;
            case 'string':
                output.push({type, value: value});
                continue;
            case 'identifier':
                output.push({type, name: value});
                continue;
            case 'operator': {
                while (operator.length > 0 && output.length >= 2) {
                    // 处理op stack
                    const op = operator[operator.length - 1];
                    if (
                        operatorPrecedence(value) <=
                        operatorPrecedence(op.value)
                    ) {
                        const [b, a] = [output.pop()!, output.pop()!];
                        output.push({
                            type: 'function-call',
                            function: operator.pop()!.value,
                            args: [a, b],
                        });
                        continue;
                    }
                    break;
                }
                operator.push(tokens.shift()!);
                continue;
            }
            case 'left-paren': {
                output.shift(); // (
                output.push(parseStatement(tokens));
                output.shift(); // )
                continue;
            }
            case 'right-paren': {
                break;
            }
            case 'terminator': {
                tokens.shift();
                break;
            }
            default: {
                throw new Error(`Unexpected token:${token}`);
            }
        }
    }

    while (operator.length > 0 && output.length >= 2) {
        const [b, a] = [output.pop()!, output.pop()!];
        output.push({
            type: 'function-call',
            function: operator.pop()!.value,
            args: [a, b],
        });
    }

    return output[0] as Instruction;
}

export function parser(tokens: Token[]) {
    //     const output: AST = [];
    //     const operator:Token[] = [];

    //     return output;
    // todo:
    return;
}

// 操作符优先级
const operatorPrecedence = (operator: string): number => {
    const precidences: Record<string, number> = {
        and: 0,
        or: 0,
        xor: 0,
        '==': 0,
        '<': 0,
        '>': 0,
        '>=': 0,
        '<=': 0,
        '<>': 0,
        '?': 0,
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '^': 3,
        '.': 4,
        '=': 5,
        '=>': 5,
    };
    return precidences[operator];
};
