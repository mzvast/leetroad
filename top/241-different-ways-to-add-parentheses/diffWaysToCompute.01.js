/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
    let ans = [];
    for (let i = 0; i < expression.length; i++) {
        const op = expression[i];
        if (op !== '+' && op !== '-' && op !== '*') continue;

        // 分成两部分 [a1,a2,a3] [b1,b2,b3]
        const a_str = expression.substr(0, i);
        const b_str = expression.substr(i + 1);
        const a = diffWaysToCompute(a_str);
        const b = diffWaysToCompute(b_str);
        for (let x of a) {
            for (let y of b) {
                switch (op) {
                    case '+':
                        ans.push(x + y);
                        break;
                    case '-':
                        ans.push(x - y);
                        break;
                    case '*':
                        ans.push(x * y);
                        break;
                }
            }
        }
    }
    // 纯数字
    if (ans.length === 0) {
        ans.push(+expression);
    }
    // console.log('ans:', ans);
    return ans;
};
