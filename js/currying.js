// 实现currying函数支持如下调用
const add = (a, b, c) => a + b + c;
const a1 = currying(add, 1);
const a2 = a1(2);
console.log(a2(3));

function currying(fn, ...args) {
    const length = fn.length; // 参数总个数
    let allArgs = [...args]; // 所有参数
    return function getMore(...moreArgs) {
        allArgs.push(...moreArgs);

        if (allArgs.length >= length) {
            // 收集够了
            return fn(...allArgs);
        }

        // 继续收集
        return getMore;
    };
}
