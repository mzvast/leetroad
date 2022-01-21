// 实现一个控制并发的函数，接收并发量参数 3

const {loadImg, urls} = require('./mock');

class PromiseQueue {
    constructor({concurrency = 1}) {
        this.concurrency = concurrency;
        this.currentCount = 0;
        this.pendingList = [];
    }

    add(task) {
        this.pendingList.push(task);
        this.run();
    }

    run() {
        if (
            this.pendingList.length === 0 ||
            this.concurrency === this.currentCount
        ) {
            return;
        }
        this.currentCount++;
        const fn = this.pendingList.shift();
        const promise = fn();

        promise
            .then(this.completeOne.bind(this))
            .catch(this.completeOne.bind(this));
    }

    completeOne() {
        this.currentCount--;
        this.run();
    }
}

const queue = new PromiseQueue({concurrency: 3});

urls.forEach((url) => {
    queue.add(() => loadImg(url));
});
