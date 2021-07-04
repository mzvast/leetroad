/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
    // l[i] := max length ends with i
    // l[i] = max{l[j]+1}, 0<=j<i<n

    // c[i] := number of LIS ends with i
    // c[i] = sum{c[j]}, 0<=j<i<n, nums[j]<nums[i],l[i]===l[n-1]-1

    const n = nums.length;
    if (n === 0) return 0;
    const c = Array(n + 1).fill(1);
    const l = Array(n + 1).fill(1);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] <= nums[j]) continue;
            if (l[j] + 1 > l[i]) {
                l[i] = l[j] + 1;
                c[i] = c[j];
            } else if (l[j] + 1 === l[i]) {
                c[i] += c[j];
            }
        }
    }

    const maxLen = Math.max.apply(null, l);

    let ans = 0;

    for (let i = 0; i < n; i++) {
        if (l[i] === maxLen) {
            ans += c[i];
        }
    }
    // console.log(maxLen,l,c)
    return ans;
};
