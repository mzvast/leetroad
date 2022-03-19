/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
    nums = radixSort(nums);

    let ans = 0;
    // console.log(nums);
    for (let i = 1; i < nums.length; i++) {
        ans = Math.max(nums[i] - nums[i - 1], ans);
    }
    return ans;
};

// 线性复杂度，基数排序
function radixSort(arr) {
    const n = arr.length;

    let cnt = Array(65536).fill(0); // 计数
    let temp = Array(n).fill(0); // 临时空间

    // low 16 bit sort arr->temp
    for (let i = 0; i < n; i++) cnt[arr[i] & 0xffff] += 1; // count
    for (let i = 1; i < 65536; i++) cnt[i] += cnt[i - 1]; // prefixSum
    for (let i = n - 1; i >= 0; --i) temp[--cnt[arr[i] & 0xffff]] = arr[i]; // placement

    // init cnt
    for (let i = 0; i < 65536; i++) cnt[i] = 0;

    // high 16 bit sort temp->arr
    for (let i = 0; i < n; i++) cnt[(arr[i] & 0xffff0000) >> 16] += 1; // count

    for (let i = 1; i < 65536; i++) cnt[i] += cnt[i - 1]; // prefixSum
    for (let i = n - 1; i >= 0; --i) {
        arr[--cnt[(temp[i] & 0xffff0000) >> 16]] = temp[i]; // placement
    }
    return arr;
}
