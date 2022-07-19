## 498. 对角线遍历
```
给你一个大小为 m x n 的矩阵 mat ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。

 

示例 1：


输入：mat = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,4,7,5,3,6,8,9]
示例 2：

输入：mat = [[1,2],[3,4]]
输出：[1,2,3,4]
 

提示：

m == mat.length
n == mat[i].length
1 <= m, n <= 104
1 <= m * n <= 104
-105 <= mat[i][j] <= 105
```
%

```js
// hashmap 对角线通用做法
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
    // hashmap

    const ans = [];
    const h = new Map(); // i+j=>[];

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (!h.has(i + j)) h.set(i + j, []);
            h.get(i + j).push(mat[i][j]);
        }
    }

    for (let i = 0; i < h.size; i++) {
        if (i % 2 === 0) {
            ans.push(...h.get(i).reverse());
        } else {
            ans.push(...h.get(i));
        }
    }

    return ans;
};
```

```js
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
    const m = mat.length, n = mat[0].length;
    let ans = [];
    let up = true; //向上走
    let i = j = 0;
    while (i < m && j < n) {
        // console.log(i, j);
        if (up) {
            // up
            // ------
            //       |
            //       |

            while (i > 0 && j < n - 1) {
                // console.log('push up:', i, j);
                ans.push(mat[i--][j++]);
            }
            // console.log('push up:', i, j);
            ans.push(mat[i][j])

            // 右边碰到
            if (j === n - 1) {
                i += 1;
            } else {
                j += 1;
            }

        } else {
            // down

            // |
            // |
            //  ------
            while (i < m - 1 && j > 0) {
                // console.log('push down:', i, j);
                ans.push(mat[i++][j--]);
            }
            // console.log('push down:', i, j);
            ans.push(mat[i][j])
            // 下面碰到
            if (i === m - 1) {
                j += 1;
            } else {
                i += 1;
            }
        }
        up = !up;
    }


    return ans;
};
```