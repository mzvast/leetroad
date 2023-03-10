import {
    AST,
    FunctionCall,
    Instruction,
    Mem,
    SmolFunction,
    Value,
} from './definitions';

export function interpreter(instruction: AST | Instruction, mem: Mem): Value {
    if (!instruction) return {val: undefined};
    if (instruction instanceof Array) {
        let val: Value = {
            val: undefined,
        };

        for (let instr of instruction) {
            val = interpreter(instr, mem);
            if (val.isReturn) return val;
        }
        return val;
    }
    // console.log(
    //     '🚀 ~ file: interpreter.ts:25 ~ interpreter ~ instruction',
    //     JSON.stringify(instruction, null, 2)
    // );

    const isPrimitive =
        instruction.type === 'string' ||
        instruction.type === 'number' ||
        instruction.type === 'boolean';

    if (isPrimitive) return {val: instruction.value};

    if (instruction.type === 'function') return {val: instruction}; // 函数本身

    if (instruction.type === 'variable-declaration') {
        // 如果已经有了，报错
        if (mem[instruction.name])
            throw new Error('Variable ' + instruction.name + ' already exists');
        mem[instruction.name] = {
            memType: instruction.varType,
            val: undefined,
        };
        return {val: undefined};
    }

    if (instruction.type === 'function-call')
        return interpretFnCall(instruction, mem);

    if (instruction.type === 'return')
        return {isReturn: true, val: interpreter(instruction.exp, mem).val};

    if (instruction.type === 'if') {
        const result = interpreter(instruction.condition, mem);
        if (result.val) {
            return interpreter(instruction.body, {...mem});
        }
        return {val: undefined};
    }

    if (instruction.type === 'identifier') {
        return {val: mem[instruction.name].val?.val};
    }

    throw new Error('Unknown instruction' + instruction);
}

function interpretFnCall(call: FunctionCall, mem: Mem): Value {
    const arg1 = call.args[0];
    const arg2 = call.args[1];
    if (call.function === '=') {
        const identifier = arg1;

        // edge cases
        if (identifier instanceof Array) throw new Error('Syntax error');
        if (identifier?.type !== 'identifier')
            throw new Error('Expected  identifier');

        const existing = mem[identifier.name];

        // not exist
        if (!existing) throw new Error('Var not defined');

        // let 不能重复赋值

        if (existing.memType === 'let' && existing.val)
            throw new Error('Let var cannot reassign');

        existing.val = interpreter(arg2, mem);
        return {val: undefined}; // ?? 这里是不是应该用右边的值
    }

    if (call.function === '<') {
        const left = interpreter(arg1, mem).val;
        const right = interpreter(arg2, mem).val;
        return {val: left < right};
    }

    if (call.function === 'and') {
        const left = interpreter(arg1, mem).val;
        const right = interpreter(arg2, mem).val;
        return {val: left && right};
    }

    if (call.function === 'or') {
        const left = interpreter(arg1, mem).val;
        const right = interpreter(arg2, mem).val;
        return {val: left || right};
    }

    if (call.function === '<=') {
        const left = interpreter(arg1, mem).val;
        const right = interpreter(arg2, mem).val;
        return {val: left <= right};
    }

    if (call.function === '<>') {
        const left = interpreter(arg1, mem).val;
        const right = interpreter(arg2, mem).val;
        return {val: left !== right};
    }

    if (call.function === '>') {
        const left = interpreter(arg1, mem).val;
        const right = interpreter(arg2, mem).val;
        return {val: left > right};
    }

    if (call.function === '>=') {
        const left = interpreter(arg1, mem).val;
        const right = interpreter(arg2, mem).val;
        return {val: left >= right};
    }
    if (call.function === '==') {
        const left = interpreter(arg1, mem).val;
        const right = interpreter(arg2, mem).val;
        return {val: left === right};
    }

    if (call.function === '+') {
        if (call.args.length < 2) throw new Error('not enough args');

        const left = interpreter(arg1, mem).val;
        const right = interpreter(arg2, mem).val;
        return {val: left + right};
    }

    if (call.function === '-') {
        const left = interpreter(arg1, mem).val;
        const right = interpreter(arg2, mem).val;
        return {val: left - right};
    }

    if (call.function === '*') {
        const left = interpreter(arg1, mem).val;
        const right = interpreter(arg2, mem).val;
        return {val: left * right};
    }

    if (call.function === '/') {
        const left = interpreter(arg1, mem).val;
        const right = interpreter(arg2, mem).val;
        return {val: left / right};
    }

    if (call.function === 'print') {
        console.log(interpreter(arg1, mem).val);
        return {val: undefined};
    }

    // 用户定义的function
    const variable = mem[call.function];
    if (!variable || !variable.val)
        throw new Error('Function' + call.function + 'not defined');

    const fn = variable.val.val as SmolFunction;
    if (fn.type !== 'function')
        throw new Error('Function' + call.function + 'is not a function');

    const args: Mem = {}; // 函数的局部变量
    fn.args.forEach((arg, index) => {
        args[arg] = {memType: 'let', val: interpreter(call.args[index], mem)};
    });

    return interpreter(fn.body, {...mem, ...args});
}
