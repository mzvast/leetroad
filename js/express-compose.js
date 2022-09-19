// ## 题目需求 express middleware
// https://zhuanlan.zhihu.com/p/400743419

let middleware = [];

middleware.push((req, res, next) => {
    console.log(1);
    next();
    console.log(1.1);
});
middleware.push((req, res, next) => {
    console.log(2);
    next();
    console.log(2.1);
});

middleware.push((req, res, next) => {
    console.log(3);
    next();
    console.log(3.1);
});

let fn = compose(middleware);
fn({cnt: 0});

/**
 * output:
 * 1
 * 2
 * 3
 * 3.1
 * 2.1
 * 1.1
 */

function compose(middleware) {
    return function (req, res, next) {
        dispatch(0);
        // 触发第i个中间件
        function dispatch(i) {
            let fn = middleware[i];
            if (i === middleware.length) fn = next;
            if (!fn) return;

            return fn(req, res, function () {
                dispatch(i + 1);
            });
        }
    };
}
