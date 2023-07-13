// quicksort in place
function quicksort(nums) {
    const n = nums.length;
    sort(0, n - 1);

    function sort(l, r) {
        if (l >= r) return;
        const mid = part(l, r);
        sort(l, mid - 1);
        sort(mid + 1, r);
    }

    function part(l, r) {
        let v = nums[l], i = l, j = r + 1;
        while (true) {
            while (nums[++i] < v) if (i > r) break;
            while (nums[--j] > v) if (j < l) break;
            if (i >= j) break;
            swap(i, j);
        }
        swap(l, j);
        return j;
    }

    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }
}
const arr = [3, 2, 1, 4, 5, 6, 7, 8, 9, 10];
quicksort(arr);
console.log(arr);
