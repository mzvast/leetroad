## MergeSort
```js
function mergeSort(arr, l, r) {
    if (l >= r) return;
    const mid = (l + r) >> 1;
    mergeSort(arr, l, mid);
    mergeSort(arr, mid + 1, r);
    let tmp = [],
        k = 0,
        p1 = l,
        p2 = mid + 1;
    while (p1 <= mid || p2 <= r) {
        if (p2 > r || (p1 <= mid && arr[p1] <= arr[p2])) {
            tmp[k++] = arr[p1++];
        } else {
            tmp[k++] = arr[p2++];
        }
    }
    for (let i = l; i <= r; i++) arr[i] = tmp[i - l];
    tmp = null;
}
const arr = [1, 5, 3, 8, -1];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
```
