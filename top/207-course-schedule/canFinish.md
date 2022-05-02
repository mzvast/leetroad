## 207. 课程表
```
你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。

例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

 

示例 1：

输入：numCourses = 2, prerequisites = [[1,0]]
输出：true
解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
示例 2：

输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
输出：false
解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。
 

提示：

1 <= numCourses <= 105
0 <= prerequisites.length <= 5000
prerequisites[i].length == 2
0 <= ai, bi < numCourses
prerequisites[i] 中的所有课程对 互不相同
```

%

```js
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {

    // 拓扑排序
    const inDeg = Array(numCourses).fill(0);// 每个节点的入度
    const g = Array(numCourses).fill().map(() => []); // 每个节点指向的其他节点

    // bfs
    const q = [];// 入度为0的节点

    for (let x of prerequisites) {
        const [a, b] = x;
        inDeg[b]++;
        g[a].push(b);
    }

    for (let i = 0; i < numCourses; i++) {
        if (inDeg[i] === 0) q.push(i);
    }

    let cnt = 0;// 已经排序的节点数量

    while (q.length) {
        const cur = q.shift();
        cnt++;
        // 更新指向的节点
        for (let x of g[cur]) {
            inDeg[x]--;
            if (inDeg[x] === 0) q.push(x);
        }
    }

    return cnt === numCourses;
};
```