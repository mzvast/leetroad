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
