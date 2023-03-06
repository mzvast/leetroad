import {compiler} from './compiler';
import {describe, it, expect} from 'vitest';
import {input, output} from './const';

describe('compiler should work', () => {
    it('should work', () => {
        expect(compiler(input)).toBe(output);
    });
});
