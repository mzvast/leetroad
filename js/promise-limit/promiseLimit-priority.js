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
        const {fn} = this.pendingList
            .sort((a, b) => (a.priority > b.priority ? -1 : 1))
            .shift();
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

const formatTask = (url) => {
    return {
        fn: () => loadImg(url),
        priority: url.priority,
    };
};

urls.forEach((url) => {
    queue.add(formatTask(url));
});

const highPriorityTask = {
    priority: 10,
    info: 'high!!!',
    time: 2000,
};

queue.add(formatTask(highPriorityTask));
