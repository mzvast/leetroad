/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    const arr = []; // 2d array

    for (let [open, close] of intervals) {
        arr.push([open, 1]);
        arr.push([close, -1]);
    }

    // 对arr排序
    arr.sort((a, b) => {
        if (
            a[0] < b[0] || // 区间从小到大
            (a[0] === b[0] && a[1] > b[1]) // 同区间先+后-
        )
            return -1;
        return 1;
    });

    let ans = [],
        pre = -1, // 前一个区间起始位置
        sum = 0; // 累加权值

    for (let i = 0; i < arr.length; i++) {
        const [idx, weight] = arr[i];
        if (pre === -1) pre = idx; // open
        sum += weight;
        if (sum === 0) {
            // close
            ans.push([pre, idx]);
            pre = -1;
        }
    }

    return ans;
};
