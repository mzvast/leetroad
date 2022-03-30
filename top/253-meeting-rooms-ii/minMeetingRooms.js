/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
    // 上下车问题，最多车上有几个人
    const arr = [];
    for (let [i, j] of intervals) {
        arr.push([i, +1]);
        arr.push([j, -1]);
    }

    arr.sort(([t1, v1], [t2, v2]) => {
        if (t1 < t2 || (t1 === t2 && v1 < v2)) return -1;
    });
    // console.log(arr);
    let cur = 0; //车上的人数
    let ans = 0; // 车上最多人数

    for (let i = 0; i < arr.length; i++) {
        const [_, diff] = arr[i];
        cur += diff;
        ans = Math.max(ans, cur);
    }

    return ans;
};
