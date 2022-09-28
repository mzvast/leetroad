async function asyncAdd(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
}

// async function sum(...nums) {
//     const n = nums.length;
//     if (n === 1) return nums[0];

//     if (n % 2 === 1) nums.push(0);

//     const ans = [];

//     for (let i = 0; i < nums.length; i += 2) {
//         ans.push(asyncAdd(nums[i], nums[i + 1]));
//     }

//     return Promise.all(ans).then((values) => {
//         return sum(...values);
//     });
// }

async function sum(...nums) {
    // producer consumer

    let pendingCnt = 0; // 当前未完成任务数

    return new Promise((resolve) => {
        function job(a, b) {
            pendingCnt += 1;
            return asyncAdd(nums.pop(), nums.pop()).then((res) => {
                pendingCnt -= 1;
                nums.push(res);
                check();
            });
        }

        function check() {
            if (nums.length >= 2) {
                job();
                check();
            } else if (pendingCnt === 0) {
                resolve(nums[0]);
            }
        }

        check();
    });
}

(async () => {
    console.time('a');
    const res = await sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    console.timeEnd('a');
    console.log(res);
})();
