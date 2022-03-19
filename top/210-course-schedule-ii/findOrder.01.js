/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    // 拓扑排序
    const inDeg = Array(numCourses).fill(0); // 所有节点的入度
    const g = Array(numCourses)
        .fill(0)
        .map(() => []); // 每个节点所指向的其他节点
    const q = []; // 度为0的节点

    for (let x of prerequisites) {
        // from-> to
        const [to, from] = x;
        if (to === from) return []; // impossible
        inDeg[to]++;
        g[from].push(to);
    }

    for (let i = 0; i < numCourses; i++) {
        if (inDeg[i] === 0) q.push(i);
    }

    let ans = [];

    while (q.length) {
        const from = q.shift();
        ans.push(from);
        // console.log('pop:', from);
        for (let to of g[from]) {
            inDeg[to]--;
            if (inDeg[to] === 0) q.push(to);
        }
    }
    if (ans.length < numCourses) return [];

    return ans;
};
