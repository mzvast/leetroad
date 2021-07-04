/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSwap = function (nums1, nums2) {
    // swap[i] := 最小次数。第i个元素交换
    // keep[i] := 最小次数。第i个元素不交换

    // ...,A[i-1], A[i]
    // ...,B[i-1], B[i]

    // if(A[i]>A[i-1] && B[i]>B[i-1])
    // swap[i] = swap[i-1]+1 // both swap for i-1,i
    // keep[i] = keep[i-1] // no swap for i-1,i

    // if(A[i]>B[i-1] && B[i]>A[i-1])
    // swap[i] = min(keep[i-1] + 1, swap[i]) // not swap i-1
    // keep[i] = min(swap[i-1], keep[i]) // swap i-1

    const A = nums1,
        B = nums2;
    const n = nums1.length;
    // const swap = Array(n + 1).fill(Infinity),
    //     keep = Array(n + 1).fill(Infinity);

    // base case
    let keep_i_1 = 0;
    let swap_i_1 = 1;
    let swap_i = Infinity;
    let keep_i = Infinity;

    for (let i = 1; i < n; i++) {
        if (A[i] > A[i - 1] && B[i] > B[i - 1]) {
            // swap[i] = swap[i - 1] + 1;
            // keep[i] = keep[i - 1];
            swap_i = swap_i_1 + 1;
            keep_i = keep_i_1;
        }

        if (A[i] > B[i - 1] && B[i] > A[i - 1]) {
            // swap[i] = Math.min(keep[i - 1] + 1, swap[i]);
            // keep[i] = Math.min(swap[i - 1], keep[i]);
            swap_i = Math.min(keep_i_1 + 1, swap_i);
            keep_i = Math.min(swap_i_1, keep_i);
        }
        swap_i_1 = swap_i;
        keep_i_1 = keep_i;
        swap_i = Infinity;
        keep_i = Infinity;
    }

    // console.log(swap, keep);

    return Math.min(swap_i_1, keep_i_1);
};
