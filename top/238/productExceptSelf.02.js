/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const len = nums.length;

    // L[i] := 左侧乘积列表
    // L[i] = L[i-1]*nums[i-1]

    const L = [];
    // base case
    L[0] = 1;

    for (let i = 1; i < len; i++) {
        L[i] = L[i - 1] * nums[i - 1];
    }

    // R[i] := 右侧乘积列表
    // R[i] = R[i+1]*nums[i+1]

    const R = [];
    // base case
    R[len - 1] = 1;
    for (let i = len - 2; i >= 0; i--) {
        R[i] = R[i + 1] * nums[i + 1];
    }

    // ans[i] = L[i] * R[i]
    return new Array(len).fill(0).map((_, i) => L[i] * R[i]);
};
