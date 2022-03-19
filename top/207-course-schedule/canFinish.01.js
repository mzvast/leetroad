/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    // 拓扑排序
    const inDeg = Array(numCourses).fill(0); // 每个节点的入度
    const g = Array(numCourses)
        .fill()
        .map(() => []); // 每个点指向其他节点的集合
    const q = []; // 入度为0的节点加入

    for (let x of prerequisites) {
        // from->to
        const [to, from] = x;
        if (to === from) return false;
        inDeg[to] += 1;
        g[from].push(to);
    }

    // 入列所有入度为0的节点
    for (let i = 0; i < numCourses; i++) {
        if (inDeg[i] === 0) q.push(i);
    }

    let cnt = 0; // 一共弹出多少个节点
    while (q.length) {
        const cur = q.shift();
        cnt++;
        // console.log('pop:', cur);
        for (let to of g[cur]) {
            inDeg[to]--;
            if (inDeg[to] === 0) q.push(to);
        }
    }

    return cnt === numCourses;
};
