## 556. 下一个更大元素 III
```
给你一个正整数 n ，请你找出符合条件的最小整数，其由重新排列 n 中存在的每位数字组成，并且其值大于 n 。如果不存在这样的正整数，则返回 -1 。

注意 ，返回的整数应当是一个 32 位整数 ，如果存在满足题意的答案，但不是 32 位整数 ，同样返回 -1 。

 

示例 1：

输入：n = 12
输出：21
示例 2：

输入：n = 21
输出：-1
 

提示：

1 <= n <= 231 - 1
```

%
```js
// https://www.youtube.com/watch?v=6qXO72FkqwM
// https://www.youtube.com/watch?v=K-QCteGM-Bk
/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
    // 找到下一个全排列
    // 类似31题

    // 从右往左找到第一个降序位置a
    // 从右往左找到第一个比该元素大的元素b
    // swap这俩
    // a及其右边进行排序

    let arr = (n + '').split('');

    // 从右往左找到第一个降序位置i
    let i = arr.length - 2
    for (; i >= 0; i--) {
        if (arr[i] < arr[i + 1]) break;
    }

    // console.log('i', i, arr[i]);

    if (i < 0) return -1;

    // 从右往左找到第一个比该元素大的元素
    let j = arr.length - 1
    for (; j > i; j--) {
        if (arr[j] > arr[i]) break;
    }

    // swap i j
    swap(i, j);
    // arr = arr.slice(0, i + 1).concat(arr.slice(i + 1).sort((a, b) => a < b ? -1 : 1));
    reverse(i + 1, arr.length - 1);


    const ans = +arr.join('');
    if (ans > 2 ** 31 - 1) return -1;
    return ans;

    function reverse(i, j) {
        while (i < j) {
            swap(i++, j--);
        }
    }


    function swap(i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
};

```
