import {transformer} from './transformer';
import {describe, expect, it} from 'vitest';
import {ast, newAst} from './const';

describe('transformer should work', () => {
    it('should work', () => {
        expect(transformer(ast)).toEqual(newAst);
    });
});
