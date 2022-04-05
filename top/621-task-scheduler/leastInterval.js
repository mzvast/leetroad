/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    // 如果能填满CD时间，则返回任务长度
    // 否则返回围成面积 (m-1)*(n+1)+k  （k个出现m次）

    // 出现最多的任务次数m次
    // |<- n+1 ->|
    // A B []
    // A B []
    // A B []
    // A

    const cnt = Array(26).fill(0);
    for (let task of tasks) cnt[task.charCodeAt(0) - 'A'.charCodeAt(0)] += 1;
    cnt.sort((a, b) => (a > b ? -1 : 1)); // 从大到小

    const m = cnt[0];
    let k = 0;
    for (let i = 0; i < 26; i++) {
        if (m === cnt[i]) k += 1;
    }

    return Math.max(tasks.length, (m - 1) * (n + 1) + k);
};
