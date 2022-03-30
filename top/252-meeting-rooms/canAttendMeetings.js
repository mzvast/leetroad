/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
    // 上下车问题，判断是否同时有2个人在车上

    const arr = [];
    for (let [on, off] of intervals) arr.push([on, +1], [off, -1]);

    arr.sort(([t1, v1], [t2, v2]) =>
        t1 < t2 || (t1 === t2 && v1 < v2) ? -1 : 1
    );

    let max = 0; // 同时最大的会议数量
    let sum = 0; // 当前会议数量
    for (let [idx, diff] of arr) {
        sum += diff;
        max = Math.max(max, sum);
        if (max > 1) return false;
    }

    return true;
};
