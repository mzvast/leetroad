function quickSort(nums) {
    const n = nums.length;

    sort(0, n - 1);

    function sort(l, r) {
        if (l >= r) return;
        const mid = partition(l, r);
        sort(l, mid - 1);
        sort(mid + 1, r);
    }

    function partition(l, r) {
        let i = l,
            j = r + 1,
            v = nums[l];
        while (true) {
            while (nums[++i] < v) if (i > r) break;
            while (nums[--j] > v) if (j < l) break;
            if (i >= r) break;
            swap(i, j);
        }
        swap(l, j);
        return j;
    }

    function swap(l, r) {
        const tmp = nums[l];
        nums[l] = nums[r];
        nums[r] = tmp;
    }
}

const nums = [5, 1, 3, 2, 4, 100];
quickSort(nums);
console.log(nums);
