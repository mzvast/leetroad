import {tokenizer} from './tokenizer';
import {describe, it, expect} from 'vitest';
import {input, tokens} from './const';

describe('parser should work', () => {
    it('should ', () => {
        expect(tokenizer(input)).toEqual(tokens);
    });
});
