/**
 * @param {number[]} arr
 * @return {number}
 */
 var countTriplets = function (arr) {
    if (!arr || arr.length === 0) return 0;
    // 暴力
    let ans = 0;
    for (let i = 0, len = arr.length; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = j; k < len; k++) {
                if (i < j && j <= k) {
                   
                    const arrA = arr.slice(i, j - 1+1);

                    const a = arrA.length === 0 ? arr[i] : arrA.reduce((pre, cur) => {
                        return pre ^ cur
                    })
                    const arrB = arr.slice(j, k+1)
                    const b = arrB.length === 0 ? arr[j] : arrB.reduce((pre, cur) => {
                        return pre ^ cur
                    })
                    //  console.log(i,j,k,arrA,arrB)
                    if (a === b) ans++;
                }
            }
        }
    }
    return ans;
};

// O(n^3)