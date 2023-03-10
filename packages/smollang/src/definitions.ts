export type Token = {
    // Our type is what we have identified the token to be
    type:
        | 'operator'
        | 'keyword'
        | 'terminator'
        | 'identifier'
        | 'left-paren'
        | 'right-paren'
        | 'pipe'
        | 'left-curly'
        | 'right-curly'
        | 'string'
        | 'number'
        | 'comma'
        | 'boolean';

    // The actual token
    value: string;
};

// AST
export interface AST extends Array<Instruction | AST> {}

export type Instruction =
    | SmolFunction
    | FunctionCall
    | SmolNumber
    | SmolString
    | SmolBool
    | VariableDeclaration
    | IfStatement
    | ReturnStatement
    | WhileStatement
    | SmolIdentifier;

export interface Statement {
    type: string;
}

// 函数
export interface SmolFunction extends Statement {
    type: 'function';
    args: string[];
    body: AST;
}

// 函数调用
export interface FunctionCall extends Statement {
    type: 'function-call';
    function: string;
    args: AST;
}

// 数字
export interface SmolNumber extends Statement {
    type: 'number';
    value: number;
}

// 字符串
export interface SmolString extends Statement {
    type: 'string';
    value: string;
}

// 布尔值
export interface SmolBool extends Statement {
    type: 'boolean';
    value: boolean;
}

// 变量声明
export interface VariableDeclaration extends Statement {
    type: 'variable-declaration';
    name: string;
    varType: 'let' | 'var';
}

// if
export interface IfStatement extends Statement {
    type: 'if';
    condition: AST | Instruction;
    body: AST | Instruction;
}

// return
export interface ReturnStatement extends Statement {
    type: 'return';
    exp: AST | Instruction;
}

// while
export interface WhileStatement extends Statement {
    type: 'while';
    condition: AST | Instruction;
    body: AST | Instruction;
}

// id
export interface SmolIdentifier extends Statement {
    type: 'identifier';
    name: string;
}

// interpreter返回值
export interface Value {
    val: any;
    isReturn?: boolean;
}

// 内存字典
export interface Mem {
    [key: string]: {
        memType: 'let' | 'var';
        val: Value | undefined;
    };
}
