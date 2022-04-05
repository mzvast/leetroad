/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
    // 从尾部往前依次归位
    // 把要的那个数先翻转到第一位，再翻转到想要的位置

    const n = arr.length;
    const ind = Array(n + 1).fill(null); // 数字对应位置，数字范围[1,n]
    for (let i = 0; i < n; i++) ind[arr[i]] = i;
    let ans = [];
    // console.log(ind);
    // 从大到小
    for (let i = n; i > 0; i--) {
        if (ind[i] === i - 1) continue; // 已经在正确的位置
        const idx = ind[i]; // 数字位置
        // console.log(i, '=>', idx);
        if (idx >= 1) {
            // 翻到头部
            reverse(idx);
            ans.push(idx + 1);
            // console.log('step1:', arr);
        }
        if (i !== 1) {
            // 翻到正确位置
            reverse(i - 1);
            ans.push(i);
        }

        // console.log('step2:', arr);
    }

    return ans;

    //  翻转0..k，且更新ind
    function reverse(k) {
        for (let i = 0, j = k; i < j; i++, j--) {
            const tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;

            ind[arr[i]] = i;
            ind[arr[j]] = j;
        }
    }
};
