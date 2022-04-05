/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function (k) {
    // 三个指针分别乘以3.5.7，取最小值
    let arr = [1];
    let p3 = (p5 = p7 = 0);
    while (arr.length < k) {
        const cur = Math.min(3 * arr[p3], 5 * arr[p5], 7 * arr[p7]);
        arr.push(cur);

	// 去重
        if (3 * arr[p3] === cur) p3 += 1;
        if (5 * arr[p5] === cur) p5 += 1;
        if (7 * arr[p7] === cur) p7 += 1;
    }

    return arr[arr.length - 1];
};
