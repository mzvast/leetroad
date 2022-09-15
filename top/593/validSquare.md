## 593. 有效的正方形
```
给定2D空间中四个点的坐标 p1, p2, p3 和 p4，如果这四个点构成一个正方形，则返回 true 。

点的坐标 pi 表示为 [xi, yi] 。 输入没有任何顺序 。

一个 有效的正方形 有四条等边和四个等角(90度角)。

 

示例 1:

输入: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
输出: True
示例 2:

输入：p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,12]
输出：false
示例 3:

输入：p1 = [1,0], p2 = [-1,0], p3 = [0,1], p4 = [0,-1]
输出：true
 

提示:

p1.length == p2.length == p3.length == p4.length == 2
-104 <= xi, yi <= 104
```

%

```js
/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {

    // 线性代数，顺时针旋转90，顶点重合

    // 中心点 缩放4倍避免除法
    const cenX = p1[0] + p2[0] + p3[0] + p4[0];
    const centY = p1[1] + p2[1] + p3[1] + p4[1];
    const cordSet = new Set();
    for (let x of [p1, p2, p3, p4]) {
        cordSet.add(hashCord(toOriginCord(x)));
    }

    if (cordSet.size < 4) return false; // 有重合点

    // 旋转变换矩阵T
    // 0 1
    // -1 0
    // A
    // x
    // y

    // TA
    // y
    // -x

    for (let x of cordSet) {
        const cord = x.split(',');
        if (!cordSet.has(hashCord(rotate(cord)))) {
            return false;
        }
    }

    return true;

    function rotate([x, y]) {
        return [y, -x]
    }

    // 转化成基于原点的坐标
    function toOriginCord(cord) {
        return [cord[0] * 4 - cenX, cord[1] * 4 - centY]
    }
    function hashCord(cord) {
        return `${cord[0]},${cord[1]}`
    }
};
```