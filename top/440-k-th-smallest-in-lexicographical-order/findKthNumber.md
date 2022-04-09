## 440. 字典序的第K小数字
```
给定整数 n 和 k，返回  [1, n] 中字典序第 k 小的数字。

 

示例 1:

输入: n = 13, k = 2
输出: 10
解释: 字典序的排列是 [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]，所以第二小的数字是 10。
示例 2:

输入: n = 1, k = 1
输出: 1
 

提示:

1 <= k <= n <= 109

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/k-th-smallest-in-lexicographical-order
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```
%

```js
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
    // 1            2       3
    // 10 11 12     20 21

    // sibling: cur+1
    // child: cur*10
    let cur = 1;
    k -= 1;
    while (k > 0) {
        const childCnt = getChildCount(cur, n);
        if (k >= childCnt) {
            cur += 1; // sibling
            k -= childCnt;
        } else {
            cur *= 10; // child
            k -= 1;
        }
    }

    return cur;
    // 计算某个节点所有子节点的个数
    function getChildCount(cur, n) {
        let cnt = 0, // 元素个数
            firstChild = cur,// 第i层第一个元素
            lastChild = cur;// 第i层最右侧元素
        while (firstChild <= n) {
            cnt += lastChild - firstChild + 1;  // 加上这层的元素个数
            firstChild *= 10;
            lastChild = Math.min(lastChild * 10 + 9, n);
        }
        return cnt;
    }
};
```