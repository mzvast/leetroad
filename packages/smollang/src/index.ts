import { lexer } from "./lexer";
import { smolBasic, smolFib, smolEasyTest, smolWhile,smol2Fib } from "./example";
import { parser } from "./parser";
import { interpreter } from "./interpreter";

export const evaluate = (smol: string) => {
    const tokens = lexer(smol);
    // console.log("🚀 ~ file: main.ts:8 ~ evaluate ~ tokens", tokens)
    const ast = parser(tokens);
    // console.log("🚀 ~ file: main.ts:9 ~ evaluate ~ ast", JSON.stringify(ast,null,2))
    interpreter(ast, {});
};

evaluate(smolBasic);
evaluate(smolFib);
// evaluate(smol2Fib);
evaluate(smolEasyTest);
evaluate(smolWhile);
