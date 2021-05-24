/**
 * @param {number[]} arr
 * @return {number}
 */
 var countTriplets = function (arr) {
    if (!arr || arr.length === 0) return 0;
    const len = arr.length;
    let ans = 0;
    let prefixSum = [0];

    for (let i = 0; i < len; i++) {
        prefixSum[i + 1] = prefixSum[i] ^ arr[i];
    }
    // console.log(prefixSum)
    for (let i = 0; i < len; i++) {
        for (let k = i + 1; k < len; k++) {
            if (prefixSum[i] === prefixSum[k + 1]) {
                ans += k - i;
            }
        }
    }
    return ans;
};

// 前缀和，O(n^2)