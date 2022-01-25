// https://juejin.cn/post/6844903625769091079
class Promise {
    constructor(executor) {
        // 初始化状态
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];
        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.onResolvedCallbacks.forEach((fn) => fn());
            }
        };
        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;
                this.onRejectedCallbacks.forEach((fn) => fn());
            }
        };
        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled =
            typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
        onRejected =
            typeof onRejected === 'function'
                ? onRejected
                : (error) => {
                      throw error;
                  };
        const promise2 = new Promise((resolve, reject) => {
            if (this.state === 'fulfilled') {
                setTimeout(() => {
                    try {
                        const x = onFulfilled(this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (error) {
                        reject(error);
                    }
                }, 0);
            }

            if (this.state === 'rejected') {
                setTimeout(() => {
                    try {
                        const x = onRejected(this.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (error) {
                        reject(error);
                    }
                }, 0);
            }
            if (this.state === 'pending') {
                this.onResolvedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            const x = onFulfilled(this.value);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (error) {
                            reject(error);
                        }
                    }, 0);
                });
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            const x = onRejected(this.reason);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (error) {
                            reject(error);
                        }
                    }, 0);
                });
            }
        });
        return promise2;
    }
}

function resolvePromise(promise2, x, resolve, reject) {
    if (x === promise2) {
        return reject(new TypeError('Chaining cycle detected for promise'));
    }
    let called;
    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        try {
            let then = x.then;
            if (typeof then === 'function') {
                then.call(
                    x,
                    (y) => {
                        if (called) return;
                        called = true;
                        resolvePromise(promise2, y, resolve, reject);
                    },
                    (error) => {
                        if (called) return;
                        called = true;
                        reject(error);
                    }
                );
            } else {
                resolve(x);
            }
        } catch (error) {
            if (called) return;
            called = true;
            reject(error);
        }
    } else {
        resolve(x);
    }
}

Promise.resolve = function (value) {
    return new Promise((resolve, reject) => {
        resolve(value);
    });
};

Promise.reject = function (reason) {
    return new Promise((resolve, reject) => {
        reject(reason);
    });
};

Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(resolve, reject);
        }
    });
};

Promise.all = function (promises) {
    let arr = [];
    let i = 0;

    return new Promise((resolve, reject) => {
        function processData(index, data) {
            arr[index] = data;
            i++;
            if (i === promises.length) {
                resolve(arr);
            }
        }
        for (let i = 0; i < promises.length; i++) {
            promises[i].then((data) => {
                processData(i, data);
            }, reject);
        }
    });
};

// export

Promise.defer = Promise.deferred = function () {
    let dfd = {};
    dfd.promise = new Promise((resolve, reject) => {
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd;
};
module.exports = Promise;
