// ## 题目需求 koa -> 洋葱模型

// https://segmentfault.com/a/1190000013981513
let middleware = [];

middleware.push(async (context, next) => {
    console.log(1);
    await next();
    console.log(1.1);
});
middleware.push(async (context, next) => {
    console.log(2);
    await next();
    console.log(2.1);
});

middleware.push(async (context, next) => {
    console.log(3);
    await next();
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
    return function (context, next) {
        dispatch(0);
        // 触发第i个中间件
        function dispatch(i) {
            let fn = middleware[i];
            if (i === middleware.length) fn = next;
            if (!fn) return Promise.resolve();

            return Promise.resolve(
                fn(context, function () {
                    dispatch(i + 1);
                })
            );
        }
    };
}
