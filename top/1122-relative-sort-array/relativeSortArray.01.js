/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    const cnt = Array(1005).fill(0);
    for (let x of arr1) cnt[x] += 1;

    let k = 0; // placed idx
    for (let x of arr2) {
        while (cnt[x]--) arr1[k++] = x;
    }

    for (let i = 0; i < 1005; i++) {
        if (cnt[i] <= 0) continue;
        while (cnt[i]--) arr1[k++] = i;
    }

    return arr1;
};
