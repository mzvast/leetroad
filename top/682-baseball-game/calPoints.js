/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    // let pre = 0,cur = 0;
    let stack = [];
    for (let op of ops) {
        switch (op) {
            case '+':
                {
                    const cur =
                        stack[stack.length - 1] + stack[stack.length - 2];
                    stack.push(cur);
                }
                break;
            case 'D':
                {
                    const cur = stack[stack.length - 1] * 2;
                    stack.push(cur);
                }
                break;
            case 'C':
                {
                    stack.pop();
                }
                break;
            default:
                stack.push(+op);
        }
    }
    let ans = 0;
    for (let x of stack) ans += x;
    return ans;
};
