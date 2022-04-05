/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    // 1、当前栈顶元素
    // 2、未来入栈元素
    let stack = [];
    for (let i = 0, j = 0; i < popped.length; i++) {
        // 装入元素直到栈顶与出栈元素相同
        while (
            j < pushed.length &&
            (stack.length === 0 || stack[stack.length - 1] !== popped[i])
        ) {
            stack.push(pushed[j]);
            j += 1;
        }

        if (stack[stack.length - 1] !== popped[i]) return false;
        stack.pop();
    }
    return true;
};
