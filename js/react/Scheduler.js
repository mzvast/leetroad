// now--->frameDeadline(rafTime)

let frameDeadline; // 当前帧的结束时间
let pendingCallback; // requestIdleCallback的回调方法
let channel = new MessageChannel();

let isMessageLoopRunning = false;

channel.port2.onmessage = function () {
    let timeRema = timeRemaining();
    pendingCallback?.({
        // 当前帧是否完成
        didTimeout: timeRema < 0,
        // 计算剩余时间的方法
        timeRemaining
    });
};
// 计算当前帧的剩余时间
function timeRemaining() {
    // 当前帧结束时间 - 当前时间
    return frameDeadline - performance.now();
}
export function requestIdleCallback(callback) {
    requestAnimationFrame(rafTime => {
        frameDeadline = rafTime + 16.66; // todo:高刷屏待处理
        pendingCallback = callback;
        channel.port1.postMessage(null);
    });
}
export function startWorkLoop() {
    if (!isMessageLoopRunning) {
        isMessageLoopRunning = true;
        requestIdleCallback(workLoop);
    }
}

// 一个任务队列
// todo: 考虑后续是否采用优先级，可能要引入Heap
let tasks = [];
startWorkLoop();
// deadline是requestIdleCallback返回的一个对象
function workLoop(deadline) {
    // console.log(`当前帧剩余时间: ${deadline.timeRemaining()}`);
    try {
        if (deadline.timeRemaining() > 0 && tasks.length) {
            const task = tasks.shift();

            task();
        }
    } catch (error) {
        console.error(error);
    }

    if (tasks.length) {
        requestIdleCallback(workLoop);
    } else {
        isMessageLoopRunning = false; // 任务清空了
    }
}

// todo: maybe need more functions
export function addTask(fn) {
    tasks.push(fn);
    startWorkLoop();
}
