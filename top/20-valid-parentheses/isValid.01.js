/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // stack
    // '('
    // '{'
    // '['
    // push
    // ')'
    // '}'
    // ']'
    // pop

    const popDict = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    const stack = []; // bottom <> top

    for (let c of s) {
        if (c in popDict) {
            if (stack[stack.length - 1] === popDict[c]) {
                stack.pop();
            } else {
                return false; // 肯定消不掉了
            }
        } else {
            stack.push(c);
        }
    }

    return stack.length === 0;
};
