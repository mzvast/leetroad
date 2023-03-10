import {describe, test, expect} from 'vitest';
import {interpreter} from './interpreter';
import {lexer} from './lexer';
import {parser} from './parser';

describe('interpreter work', () => {
    test('should work', () => {
        function evaluate(smol: string) {
            const tokens = lexer(smol);
            console.log(
                '🚀 ~ file: interpreter.test.ts:10 ~ evaluate ~ tokens',
                tokens
            );
            const ast = parser(tokens);
            console.log(
                '🚀 ~ file: interpreter.test.ts:11 ~ evaluate ~ ast',
                ast
            );
            return interpreter(ast, {});
        }

        //         let ans = evaluate(`
        // 	let x = 1;
        // 	let y = 7;

        // 	let do_math = |x, y| {
        // 	    let add = |a, b| { a + b };

        // 	    print("x + y:");
        // 	    print(add(x, y));

        // 	    if y > 3 {
        // 		print("y is greater than 3");
        // 	    }
        // 	};

        // 	do_math(x, y);
        //     `);

        let ans = evaluate(`
			let x = 1;
			let y = 7;
		    `);
        console.log('🚀 ~ file: interpreter.test.ts:31 ~ test ~ ans', ans);

        // expect(ans).toEqual({val: '8'});
    });
});
