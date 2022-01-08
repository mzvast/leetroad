/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const len = temperatures.length;
    // 10^5 data size , can't use O(n^2)
    // 单调栈，存还没找到的index
    const stack = []; // 大...小
    const ans = new Array(len).fill(0); // fallback to zero

    for (let i = 0; i < len; i++) {
        const cur = temperatures[i];

        while (
            stack.length > 0 &&
            cur > temperatures[stack[stack.length - 1]]
        ) {
            // find it!
            // 当前元素比栈顶大，pop，ans增加一个
            const topIdx = stack.pop();
            ans[topIdx] = i - topIdx; // 当前下标和top的下标之差
        }
        stack.push(i);
    }

    return ans;
};
