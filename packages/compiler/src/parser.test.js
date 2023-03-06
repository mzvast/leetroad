import {parser} from './parser';
import {describe, it, expect} from 'vitest';
import {ast, tokens} from './const';
describe('parser should work', () => {
    it('should work', () => {
        expect(parser(tokens)).toEqual(ast);
    });
});
