/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
    const s = []; // stack
    const arr = preorder.split(',');

    for (let x of arr) {
        s.push(x);
        let last = s.length - 1;
        while (
            s.length >= 3 &&
            s[last] === '#' &&
            s[last - 1] === '#' &&
            s[last - 2] !== '#'
        ) {
            s[last - 2] = '#';
            s.pop();
            s.pop();
            last -= 2;
        }
    }

    return s.length === 1 && s[0] === '#';
};
