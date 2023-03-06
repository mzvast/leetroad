/**
 * FINALLY! We'll create our `compiler` function. Here we will link together
 * every part of the pipeline.
 *
 *   1. input  => tokenizer   => tokens
 *   2. tokens => parser      => ast
 *   3. ast    => transformer => newAst
 *   4. newAst => generator   => output
 */

import {codeGenerator} from "./codeGenerator";
import {parser} from "./parser";
import {tokenizer} from "./tokenizer";
import {transformer} from "./transformer";

export function compiler(input) {
    const tokens = tokenizer(input);
    const ast = parser(tokens);
    const newAst = transformer(ast);
    const output = codeGenerator(newAst);
    return output;
}
