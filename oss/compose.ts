function compose(...funcs) {
    // console.log('funcs::funcs', funcs);
    return funcs.reduce((a, b) => (...args) => a(b(...args)));
    //reduce 没传初始值，默认第一个值作为初始值，数组剔除index0的元素
}

// https://mp.weixin.qq.com/s/YhC6rY23CFzCw8ABoh0UVw
// (...x)=>add3(add2(...x)) // a
// add1 // b
// a(b(...args)) : add3(add2(add1(...args))

function test() {
    // composes from right to left
    const double = (x) => x * 2;
    const square = (x) => x * x;
    // console.log(compose(square)(5)); // 25
    // console.log(compose(square, double)(5)); // 100
    console.log(compose(double, square, double)(5)); // 200
}

function test1() {
    // composes functions from right to left
    const a = (next) => (x) => next(x + 'a');
    const b = (next) => (x) => next(x + 'b');
    const c = (next) => (x) => next(x + 'c');
    const final = (x) => x;
    // console.log(compose(a, b, c)(final)(''));
    console.log(a(b(c(final)))(''));
    // step1 (x) => (x + 'c')
    // step2 (x) => (x + 'b'+ 'c')
    // step3 (x) => (x + 'a' + 'b'+ 'c')
    // step4 'abc'
}

// test();
test1();
