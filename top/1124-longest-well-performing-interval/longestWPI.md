## 1124. 表现良好的最长时间段
```
给你一份工作时间表 hours，上面记录着某一位员工每天的工作小时数。

我们认为当员工一天中的工作小时数大于 8 小时的时候，那么这一天就是「劳累的一天」。

所谓「表现良好的时间段」，意味在这段时间内，「劳累的天数」是严格 大于「不劳累的天数」。

请你返回「表现良好时间段」的最大长度。

 

示例 1：

输入：hours = [9,9,6,0,6,6,9]
输出：3
解释：最长的表现良好时间段是 [9,9,6]。
示例 2：

输入：hours = [6,6,6]
输出：0
 

提示：

1 <= hours.length <= 104
0 <= hours[i] <= 16

```
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-well-performing-interval
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

%

思路：区间问题转换成前缀和问题
```js
// 花花法 https://www.youtube.com/watch?v=H76XMJmBfP0
/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {

    // ans = max(i - idx[cnt-1])
    const idx = {};
    let ans = 0;
    let cnt = 0;
    for (let i = 0; i < hours.length; i++) {
        cnt += hours[i] > 8 ? 1 : -1;
        if (idx[cnt] === undefined) idx[cnt] = i;

        if (cnt > 0) {
            ans = i + 1;
            continue;
        }
        if (idx[cnt - 1] === undefined) continue;
        ans = Math.max(ans, i - idx[cnt - 1]);
    }

    return ans;
};
```
```js
// 船长法
/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
    const ind = {}; // cnt=>index 第一次该前缀和值的位置
    ind[0] = -1;
    f = {};
    f[0] = 0;
    // f(cnt) := 前缀和为cnt的最长的序列长度
    // f(cnt) = f(cnt-1) + ind[cnt] - ind[cnt-1]
    let ans = 0;
    let cnt = 0;
    for (let i = 0; i < hours.length; i++) {
        cnt += hours[i] > 8 ? 1 : -1;

        //  没有出现过
        if (ind[cnt] === undefined) {
            ind[cnt] = i;
            if (ind[cnt - 1] === undefined) f[cnt] = 0;
            else f[cnt] = f[cnt - 1] + ind[cnt] - ind[cnt - 1];
        }
        if (ind[cnt - 1] === undefined) continue;
	//  出现过则 f(cnt) = f(cnt-1) + i - ind[cnt-1]
        ans = Math.max(ans, i - ind[cnt - 1] + f[cnt - 1]);
    }

    return ans;
};
```