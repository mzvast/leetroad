## backtrack是不行的，主要是这个切换的规律没法体现

```javascript
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    let ans = [], tmp = 0;
    let ops = [0, 1];
    // 0 n-1

    backtrack(0, 0);

    return ans;

    function backtrack(i, depth) {
        if (i === n) {           
            ans.push(tmp);
            return;
        }

        for (op of ops) {
            // do
            const cost = op * Math.pow(2, depth)
            tmp += cost;           
            backtrack(i + 1, depth + 1);
            tmp -= cost;
            // undo
        }
    }
};
```