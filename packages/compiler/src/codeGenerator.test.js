import {codeGenerator} from './codeGenerator';
import {describe, it, expect} from 'vitest';
import {newAst, output} from './const';

describe('codeGenerator should work', () => {
    it('should work', () => {
        expect(codeGenerator(newAst)).equals(output);
    });
});
