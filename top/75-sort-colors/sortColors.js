/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    const n = nums.length;
    sort(0, n - 1);
    return nums;
    // 快排
    function sort(l, r) {
        if (l >= r) return;
        const m = partition(l, r);
        sort(l, m - 1);
        sort(m + 1, r);
    }

    function partition(l, r) {
        let i = l,
            j = r + 1;
        let p = l;
        const pivot = nums[p];
        while (true) {
            while (nums[++i] < pivot) if (i === r) break;
            while (nums[--j] > pivot) if (j === l) break;
            if (i >= j) break;
            swap(i, j);
        }

        swap(l, j);
        return j;
    }

    function swap(l, r) {
        let tmp = nums[l];
        nums[l] = nums[r];
        nums[r] = tmp;
    }
};
